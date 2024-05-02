/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * # ResurrectJS
 * @version 1.0.3
 * @license Public Domain
 *
 * ResurrectJS preserves object behavior (prototypes) and reference
 * circularity with a special JSON encoding. Unlike regular JSON,
 * Date, RegExp, DOM objects, and `undefined` are also properly
 * preserved.
 *
 * ## Examples
 *
 * function Foo() {}
 * Foo.prototype.greet = function() { return "hello"; };
 *
 * // Behavior is preserved:
 * var necromancer = new Resurrect();
 * var json = necromancer.stringify(new Foo());
 * var foo = necromancer.resurrect(json);
 * foo.greet();  // => "hello"
 *
 * // References to the same object are preserved:
 * json = necromancer.stringify([foo, foo]);
 * var array = necromancer.resurrect(json);
 * array[0] === array[1];  // => true
 * array[1].greet();  // => "hello"
 *
 * // Dates are restored properly
 * json = necromancer.stringify(new Date());
 * var date = necromancer.resurrect(json);
 * Object.prototype.toString.call(date);  // => "[object Date]"
 *
 * ## Options
 *
 * Options are provided to the constructor as an object with these
 * properties:
 *
 *   prefix ('#'): A prefix string used for temporary properties added
 *     to objects during serialization and deserialization. It is
 *     important that you don't use any properties beginning with this
 *     string. This option must be consistent between both
 *     serialization and deserialization.
 *
 *   cleanup (false): Perform full property cleanup after both
 *     serialization and deserialization using the `delete`
 *     operator. This may cause performance penalties (breaking hidden
 *     classes in V8) on objects that ResurrectJS touches, so enable
 *     with care.
 *
 *   revive (true): Restore behavior (__proto__) to objects that have
 *     been resurrected. If this is set to false during serialization,
 *     resurrection information will not be encoded. You still get
 *     circularity and Date support.
 *
 *   resolver (Resurrect.NamespaceResolver(window)): Converts between
 *     a name and a prototype. Create a custom resolver if your
 *     constructors are not stored in global variables. The resolver
 *     has two methods: getName(object) and getPrototype(string).
 *
 * For example,
 *
 * var necromancer = new Resurrect({
 *     prefix: '__#',
 *     cleanup: true
 * });
 *
 * ## Caveats
 *
 *   * With the default resolver, all constructors must be named and
 *   stored in the global variable under that name. This is required
 *   so that the prototypes can be looked up and reconnected at
 *   resurrection time.
 *
 *   * The wrapper objects Boolean, String, and Number will be
 *   unwrapped. This means extra properties added to these objects
 *   will not be preserved.
 *
 *   * Functions cannot ever be serialized. Resurrect will throw an
 *   error if a function is found when traversing a data structure.
 *
 * @see http://nullprogram.com/blog/2013/03/28/
 */

interface IResurrectOptions {
  table: null
  prefix: string
  cleanup: boolean
  revive: boolean
  refcode: string
  origcode: string
  buildcode: string
  valuecode: string
}

class ResurrectError extends Error {
  constructor(message: string) {
    super(message)
    this.message = message || ''
    this.stack = new Error().stack
  }

  static {
    this.prototype.name = 'ResurrectError'
  }
}

class NamespaceResolver {
  public scope: Record<string, Function>

  /**
   * Resolves prototypes through the properties on an object and
   * constructor names.
   * @param scope
   */
  constructor(scope: Record<string, Function>) {
    this.scope = scope
  }

  /**
   * Gets the prototype of the given property name from an object. If
   * not found, it throws an error.
   * @param name
   */
  public getPrototype(name: string): Object {
    const constructor = this.scope[name]
    if (constructor) {
      return constructor.prototype
    } else {
      throw new Resurrect.prototype.Error('Unknown constructor: ' + name)
    }
  }

  /**
   * Get the prototype name for an object, to be fetched later with getPrototype.
   * @param object
   * @returns Null if the constructor is Object.\
   */
  public getName(object: any): string | null {
    let constructor: string | null = object.constructor.name
    if (constructor == null) {
      // IE
      const funcPattern = /^\s*function\s*([A-Za-z0-9_$]*)/
      constructor = funcPattern.exec(object.constructor)
        ? funcPattern.exec(object.constructor)![1]
        : null
    }

    if (constructor === '') {
      const msg = "Can't serialize objects with anonymous constructors."
      throw new Resurrect.prototype.Error(msg)
    } else if (constructor === 'Object' || constructor === 'Array') {
      return null
    } else {
      return constructor
    }
  }
}

export default class Resurrect {
  /**
   * Portable access to the global object (window, global).
   * Uses indirect eval.
   * @constant
   */
  public static readonly GLOBAL = (0, eval)('this')

  public table: null | { [_: string]: any }[]
  public prefix: string
  public cleanup: boolean
  public revive: boolean
  public refcode: string
  public origcode: string
  public buildcode: string
  public valuecode: string

  public Error = ResurrectError
  public static NamespaceResolver = NamespaceResolver

  public resolver = new Resurrect.NamespaceResolver(Resurrect.GLOBAL)

  constructor(options: Partial<IResurrectOptions> = {}) {
    this.table = null
    this.prefix = '#'
    this.cleanup = false
    this.revive = true
    for (const option in options) {
      if (Object.prototype.hasOwnProperty.call(options, option)) {
        // @ts-ignore
        this[option] = options[option]
      }
    }
    this.refcode = this.prefix + 'id'
    this.origcode = this.prefix + 'original'
    this.buildcode = this.prefix + '.'
    this.valuecode = this.prefix + 'v'
  }

  /**
   * Escape special regular expression characters in a string.
   * @param string
   * @returns The string escaped for exact matches.
   * @see http://stackoverflow.com/a/6969486
   */
  public static escapeRegExp(string: string): string {
    // eslint-disable-next-line no-useless-escape
    return string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
  }

  /**
   * Create a DOM node from HTML source; behaves like a constructor.
   * @param html
   */
  public static Node(html: string): Node | null {
    const div = document.createElement('div')
    div.innerHTML = html
    return div.firstChild
  }

  /**
   * @param type
   * @returns A function that tests for type.
   */
  public static is<T extends Object>(
    type: string
  ): (object: Object) => object is T {
    const string = '[object ' + type + ']'
    return (object: Object): object is T => {
      return Object.prototype.toString.call(object) === string
    }
  }

  public static isArray<T>(object: Object): object is Array<T> {
    const checker = Resurrect.is<Array<T>>('Array')
    return checker(object)
  }
  public static isString = Resurrect.is<string>('String')
  public static isBoolean = Resurrect.is<boolean>('Boolean')
  public static isNumber = Resurrect.is<number>('Number')
  public static isFunction = Resurrect.is<Function>('Function')
  public static isDate = Resurrect.is<Date>('Date')
  public static isRegExp = Resurrect.is<RegExp>('RegExp')
  public static isObject = Resurrect.is<Object>('Object')

  public static isAtom(object: any): boolean {
    return !Resurrect.isObject(object) && !Resurrect.isArray(object)
  }

  /**
   * @param object
   * @returns True if object is a primitive or a primitive wrapper.
   */
  public static isPrimitive(
    object: any
  ): object is null | string | number | boolean {
    return (
      object == null ||
      Resurrect.isNumber(object) ||
      Resurrect.isString(object) ||
      Resurrect.isBoolean(object)
    )
  }

  /**
   * Create a reference (encoding) to an object.
   * @param object
   */
  public ref(object?: { [_: string]: number }): Record<string, number> {
    const ref: Record<string, number> = {}
    if (!object) {
      ref[this.prefix] = -1
    } else {
      ref[this.prefix] = object[this.refcode]
    }
    return ref
  }

  /**
   * Lookup an object in the table by reference object.
   * @param ref
   */
  public deref(ref: { [_: string]: number }): Object | undefined {
    if (!this.table) {
      return undefined
    }
    return this.table[ref[this.prefix]]
  }

  /**
   * Put a temporary identifier on an object and store it in the table.
   * @param object
   * @returns The unique identifier number.
   */
  public tag(object: { [_: string]: any }): number {
    if (this.revive) {
      const constructor = this.resolver.getName(object)
      if (constructor) {
        const proto = Object.getPrototypeOf(object)
        if (this.resolver.getPrototype(constructor) !== proto) {
          throw new this.Error('Constructor mismatch!')
        } else {
          object[this.prefix] = constructor
        }
      }
    }
    object[this.refcode] = this.table?.length
    this.table?.push(object)
    return object[this.refcode]
  }

  /**
   * Create a builder object (encoding) for serialization.
   * @param name The name of the constructor.
   * @param value The value to pass to the constructor.
   */
  public builder<T>(name: string, value: T): { [_: string]: string | T } {
    const builder: { [_: string]: string | T } = {}
    builder[this.buildcode] = name
    builder[this.valuecode] = value
    return builder
  }

  /**
   * Build a value from a deserialized builder.
   * @param ref
   * @see http://stackoverflow.com/a/14378462
   * @see http://nullprogram.com/blog/2013/03/24/
   */
  public build(ref: { [_: string]: string }): any {
    const type = ref[this.buildcode].split(/\./).reduce((object, name) => {
      return object[name]
    }, Resurrect.GLOBAL)
    /* Brilliant hack by kybernetikos: */
    const args = ([null] as any[]).concat(ref[this.valuecode])
    const factory = type.bind.apply(type, args)
    const result = new factory()
    if (Resurrect.isPrimitive(result)) {
      if (!result) {
        return null
      }
      return result.valueOf() // unwrap
    } else {
      return result
    }
  }

  /**
   * Dereference or build an object or value from an encoding.
   * @param ref
   */
  public decode(ref: { [_: string]: any }): any {
    if (this.prefix in ref) {
      return this.deref(ref)
    } else if (this.buildcode in ref) {
      return this.build(ref)
    } else {
      throw new this.Error('Unknown encoding.')
    }
  }

  /**
   * @param object
   * @returns True if the provided object is tagged for serialization.
   */
  public isTagged(object: any): boolean {
    return this.refcode in object && object[this.refcode] != null
  }

  /**
   * Visit root and all its ancestors, visiting atoms with f.
   * @param root
   * @param f
   * @param replacer
   * @returns A fresh copy of root to be serialized.
   */
  public visit(
    root: any,
    f: (_: any) => any,
    replacer: Function
  ): Record<string, number> | ReturnType<typeof f> {
    if (Resurrect.isAtom(root)) {
      return f(root)
    } else if (!this.isTagged(root)) {
      let copy: any = null
      if (Resurrect.isArray<any>(root)) {
        copy = []
        // @ts-ignore
        root[this.refcode] = this.tag(copy)
        for (let i = 0; i < root.length; i++) {
          copy.push(this.visit(root[i], f, replacer))
        }
      } else {
        /* Object */
        copy = Object.create(Object.getPrototypeOf(root))
        root[this.refcode] = this.tag(copy as Object)
        for (const key in root) {
          let value = root[key]
          if (Object.prototype.hasOwnProperty.call(root, key)) {
            if (replacer && value !== undefined) {
              // Call replacer like JSON.stringify's replacer
              value = replacer.call(root, key, root[key])
              if (value === undefined) {
                continue // Omit from result
              }
            }
            copy[key] = this.visit(value, f, replacer)
          }
        }
      }
      copy[this.origcode] = root
      return this.ref(copy)
    } else {
      return this.ref(root)
    }
  }

  /**
   * Manage special atom values, possibly returning an encoding.
   * @param atom
   */
  public handleAtom(atom: any): {
    [_: string]: number | string | string[] | undefined
  } {
    const Node = Resurrect.GLOBAL.Node || function () {}
    if (Resurrect.isFunction(atom)) {
      throw new this.Error("Can't serialize functions.")
    } else if (atom instanceof Node) {
      const xmls = new XMLSerializer()
      return this.builder('Resurrect.Node', [xmls.serializeToString(atom)])
    } else if (Resurrect.isDate(atom)) {
      return this.builder('Date', [atom.toISOString()])
    } else if (Resurrect.isRegExp(atom)) {
      const args = atom
        .toString()
        .match(/\/(.+)\/([gimy]*)/)
        ?.slice(1)
      return this.builder('RegExp', args)
    } else if (atom === undefined) {
      return this.ref(undefined)
    } else if (
      Resurrect.isNumber(atom) &&
      (isNaN(atom as number) || !isFinite(atom as number))
    ) {
      return this.builder('Number', [atom.toString()])
    } else {
      return atom
    }
  }

  /**
   * Hides intrusive keys from a user-supplied replacer.
   * @param replacer function of two arguments (key, value)
   * @returns A function that skips the replacer for intrusive keys.
   */
  public replacerWrapper<T, E>(
    replacer: (k: string, v: T) => E
  ): (k: string, v: T) => T | E {
    const skip = new RegExp('^' + Resurrect.escapeRegExp(this.prefix))
    return (k: string, v: T) => {
      if (skip.test(k)) {
        return v
      } else {
        return replacer(k, v)
      }
    }
  }

  /**
   * Serialize an arbitrary JavaScript object, carefully preserving it.
   * @param object
   * @param replacer
   * @param space
   */
  public stringify(
    object: Object,
    replacer: ((k: string, v: any) => any) | string[],
    space: string | number
  ): string {
    if (Resurrect.isFunction(replacer)) {
      replacer = this.replacerWrapper(replacer)
    } else if (Resurrect.isArray(replacer)) {
      const acceptKeys = replacer
      replacer = (k: string, v: any) => {
        return acceptKeys.indexOf(k) >= 0 ? v : undefined
      }
    }
    if (Resurrect.isAtom(object)) {
      return JSON.stringify(this.handleAtom(object), replacer, space)
    } else {
      this.table = []
      this.visit(object, this.handleAtom.bind(this), replacer)
      for (let i = 0; i < this.table.length; i++) {
        if (this.cleanup) {
          delete this.table[i][this.origcode][this.refcode]
        } else {
          this.table[i][this.origcode][this.refcode] = null
        }
        delete this.table[i][this.refcode]
        delete this.table[i][this.origcode]
      }
      const table = this.table
      this.table = null
      return JSON.stringify(table, null, space)
    }
  }

  /**
   * Restore the __proto__ of the given object to the proper value.
   * @param object
   * @returns Its argument, or a copy, with the prototype restored.
   */
  public fixPrototype(object: Record<string, any>): Record<string, any> {
    if (this.prefix in object) {
      const name = object[this.prefix]
      const prototype = this.resolver.getPrototype(name)
      if ('__proto__' in object) {
        object.__proto__ = prototype
        if (this.cleanup) {
          delete object[this.prefix]
        }
        return object
      } else {
        // IE
        const copy = Object.create(prototype)
        for (const key in object) {
          if (
            Object.prototype.hasOwnProperty.call(object, key) &&
            key !== this.prefix
          ) {
            copy[key] = object[key]
          }
        }
        return copy
      }
    } else {
      return object
    }
  }

  /**
   * Deserialize an encoded object, restoring circularity and behavior.
   * @param string
   * @returns The decoded object or value.
   */
  public resurrect(string: string): any {
    let result = null
    const data = JSON.parse(string)
    if (Resurrect.isArray<{ [_: string]: any }>(data)) {
      this.table = data
      /* Restore __proto__. */
      if (this.revive) {
        for (let i = 0; i < this.table.length; i++) {
          this.table[i] = this.fixPrototype(this.table[i])
        }
      }
      /* Re-establish object references and construct atoms. */
      for (let i = 0; i < this.table.length; i++) {
        const object = this.table[i]
        for (const key in object) {
          if (Object.prototype.hasOwnProperty.call(object, key)) {
            if (!Resurrect.isAtom(object[key])) {
              object[key] = this.decode(object[key])
            }
          }
        }
      }
      result = this.table[0]
    } else if (Resurrect.isObject(data)) {
      this.table = []
      result = this.decode(data)
    } else {
      result = data
    }
    this.table = null
    return result
  }
}
