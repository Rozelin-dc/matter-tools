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
    table: null;
    prefix: string;
    cleanup: boolean;
    revive: boolean;
    refcode: string;
    origcode: string;
    buildcode: string;
    valuecode: string;
}
declare class ResurrectError extends Error {
    constructor(message: string);
}
declare class NamespaceResolver {
    scope: Record<string, Function>;
    /**
     * Resolves prototypes through the properties on an object and
     * constructor names.
     * @param scope
     */
    constructor(scope: Record<string, Function>);
    /**
     * Gets the prototype of the given property name from an object. If
     * not found, it throws an error.
     * @param name
     */
    getPrototype(name: string): Object;
    /**
     * Get the prototype name for an object, to be fetched later with getPrototype.
     * @param object
     * @returns Null if the constructor is Object.\
     */
    getName(object: any): string | null;
}
export default class Resurrect {
    /**
     * Portable access to the global object (window, global).
     * Uses indirect eval.
     * @constant
     */
    static readonly GLOBAL: any;
    table: null | {
        [_: string]: any;
    }[];
    prefix: string;
    cleanup: boolean;
    revive: boolean;
    refcode: string;
    origcode: string;
    buildcode: string;
    valuecode: string;
    Error: typeof ResurrectError;
    static NamespaceResolver: typeof NamespaceResolver;
    resolver: NamespaceResolver;
    constructor(options?: Partial<IResurrectOptions>);
    /**
     * Escape special regular expression characters in a string.
     * @param string
     * @returns The string escaped for exact matches.
     * @see http://stackoverflow.com/a/6969486
     */
    static escapeRegExp(string: string): string;
    /**
     * Create a DOM node from HTML source; behaves like a constructor.
     * @param html
     */
    static Node(html: string): Node | null;
    /**
     * @param type
     * @returns A function that tests for type.
     */
    static is<T extends Object>(type: string): (object: Object) => object is T;
    static isArray<T>(object: Object): object is Array<T>;
    static isString: (object: Object) => object is string;
    static isBoolean: (object: Object) => object is boolean;
    static isNumber: (object: Object) => object is number;
    static isFunction: (object: Object) => object is Function;
    static isDate: (object: Object) => object is Date;
    static isRegExp: (object: Object) => object is RegExp;
    static isObject: (object: Object) => object is Object;
    static isAtom(object: any): boolean;
    /**
     * @param object
     * @returns True if object is a primitive or a primitive wrapper.
     */
    static isPrimitive(object: any): object is null | string | number | boolean;
    /**
     * Create a reference (encoding) to an object.
     * @param object
     */
    ref(object?: {
        [_: string]: number;
    }): Record<string, number>;
    /**
     * Lookup an object in the table by reference object.
     * @param ref
     */
    deref(ref: {
        [_: string]: number;
    }): Object | undefined;
    /**
     * Put a temporary identifier on an object and store it in the table.
     * @param object
     * @returns The unique identifier number.
     */
    tag(object: {
        [_: string]: any;
    }): number;
    /**
     * Create a builder object (encoding) for serialization.
     * @param name The name of the constructor.
     * @param value The value to pass to the constructor.
     */
    builder<T>(name: string, value: T): {
        [_: string]: string | T;
    };
    /**
     * Build a value from a deserialized builder.
     * @param ref
     * @see http://stackoverflow.com/a/14378462
     * @see http://nullprogram.com/blog/2013/03/24/
     */
    build(ref: {
        [_: string]: string;
    }): any;
    /**
     * Dereference or build an object or value from an encoding.
     * @param ref
     */
    decode(ref: {
        [_: string]: any;
    }): any;
    /**
     * @param object
     * @returns True if the provided object is tagged for serialization.
     */
    isTagged(object: any): boolean;
    /**
     * Visit root and all its ancestors, visiting atoms with f.
     * @param root
     * @param f
     * @param replacer
     * @returns A fresh copy of root to be serialized.
     */
    visit(root: any, f: (_: any) => any, replacer: Function): Record<string, number> | ReturnType<typeof f>;
    /**
     * Manage special atom values, possibly returning an encoding.
     * @param atom
     */
    handleAtom(atom: any): {
        [_: string]: number | string | string[] | undefined;
    };
    /**
     * Hides intrusive keys from a user-supplied replacer.
     * @param replacer function of two arguments (key, value)
     * @returns A function that skips the replacer for intrusive keys.
     */
    replacerWrapper<T, E>(replacer: (k: string, v: T) => E): (k: string, v: T) => T | E;
    /**
     * Serialize an arbitrary JavaScript object, carefully preserving it.
     * @param object
     * @param replacer
     * @param space
     */
    stringify(object: Object, replacer: ((k: string, v: any) => any) | string[], space: string | number): string;
    /**
     * Restore the __proto__ of the given object to the proper value.
     * @param object
     * @returns Its argument, or a copy, with the prototype restored.
     */
    fixPrototype(object: Record<string, any>): Record<string, any>;
    /**
     * Deserialize an encoded object, restoring circularity and behavior.
     * @param string
     * @returns The decoded object or value.
     */
    resurrect(string: string): any;
}
export {};
