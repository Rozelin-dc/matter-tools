/*!
 * @rozelin/matter-tools 1.0.0 by @Rozelin
 * https://github.com/Rozelin-dc/matter-tools
 * License MIT
 *
 * The MIT License (MIT)
 *
 * Copyright (c) Rozelin.
 *
 * This software is a modified version of the original software licensed under
 * the MIT License. Original copyright (c) Liam Brummitt. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@rozelin/matter-ts"));
	else if(typeof define === 'function' && define.amd)
		define("MatterTools", ["@rozelin/matter-ts"], factory);
	else if(typeof exports === 'object')
		exports["MatterTools"] = factory(require("@rozelin/matter-ts"));
	else
		root["MatterTools"] = root["MatterTools"] || {}, root["MatterTools"]["Serializer"] = factory(root["Matter"]);
})(this, (__WEBPACK_EXTERNAL_MODULE__381__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 332:
/***/ ((__unused_webpack_module, exports) => {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
class ResurrectError extends Error {
    constructor(message) {
        super(message);
        this.message = message || '';
        this.stack = new Error().stack;
    }
}
_a = ResurrectError;
(() => {
    _a.prototype.name = 'ResurrectError';
})();
class NamespaceResolver {
    /**
     * Resolves prototypes through the properties on an object and
     * constructor names.
     * @param scope
     */
    constructor(scope) {
        this.scope = scope;
    }
    /**
     * Gets the prototype of the given property name from an object. If
     * not found, it throws an error.
     * @param name
     */
    getPrototype(name) {
        const constructor = this.scope[name];
        if (constructor) {
            return constructor.prototype;
        }
        else {
            throw new Resurrect.prototype.Error('Unknown constructor: ' + name);
        }
    }
    /**
     * Get the prototype name for an object, to be fetched later with getPrototype.
     * @param object
     * @returns Null if the constructor is Object.\
     */
    getName(object) {
        let constructor = object.constructor.name;
        if (constructor == null) {
            // IE
            const funcPattern = /^\s*function\s*([A-Za-z0-9_$]*)/;
            constructor = funcPattern.exec(object.constructor)
                ? funcPattern.exec(object.constructor)[1]
                : null;
        }
        if (constructor === '') {
            const msg = "Can't serialize objects with anonymous constructors.";
            throw new Resurrect.prototype.Error(msg);
        }
        else if (constructor === 'Object' || constructor === 'Array') {
            return null;
        }
        else {
            return constructor;
        }
    }
}
class Resurrect {
    constructor(options = {}) {
        this.Error = ResurrectError;
        this.resolver = new Resurrect.NamespaceResolver(Resurrect.GLOBAL);
        this.table = null;
        this.prefix = '#';
        this.cleanup = false;
        this.revive = true;
        for (const option in options) {
            if (Object.prototype.hasOwnProperty.call(options, option)) {
                // @ts-ignore
                this[option] = options[option];
            }
        }
        this.refcode = this.prefix + 'id';
        this.origcode = this.prefix + 'original';
        this.buildcode = this.prefix + '.';
        this.valuecode = this.prefix + 'v';
    }
    /**
     * Escape special regular expression characters in a string.
     * @param string
     * @returns The string escaped for exact matches.
     * @see http://stackoverflow.com/a/6969486
     */
    static escapeRegExp(string) {
        // eslint-disable-next-line no-useless-escape
        return string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    }
    /**
     * Create a DOM node from HTML source; behaves like a constructor.
     * @param html
     */
    static Node(html) {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.firstChild;
    }
    /**
     * @param type
     * @returns A function that tests for type.
     */
    static is(type) {
        const string = '[object ' + type + ']';
        return (object) => {
            return Object.prototype.toString.call(object) === string;
        };
    }
    static isArray(object) {
        const checker = Resurrect.is('Array');
        return checker(object);
    }
    static isAtom(object) {
        return !Resurrect.isObject(object) && !Resurrect.isArray(object);
    }
    /**
     * @param object
     * @returns True if object is a primitive or a primitive wrapper.
     */
    static isPrimitive(object) {
        return (object == null ||
            Resurrect.isNumber(object) ||
            Resurrect.isString(object) ||
            Resurrect.isBoolean(object));
    }
    /**
     * Create a reference (encoding) to an object.
     * @param object
     */
    ref(object) {
        const ref = {};
        if (!object) {
            ref[this.prefix] = -1;
        }
        else {
            ref[this.prefix] = object[this.refcode];
        }
        return ref;
    }
    /**
     * Lookup an object in the table by reference object.
     * @param ref
     */
    deref(ref) {
        if (!this.table) {
            return undefined;
        }
        return this.table[ref[this.prefix]];
    }
    /**
     * Put a temporary identifier on an object and store it in the table.
     * @param object
     * @returns The unique identifier number.
     */
    tag(object) {
        var _b, _c;
        if (this.revive) {
            const constructor = this.resolver.getName(object);
            if (constructor) {
                const proto = Object.getPrototypeOf(object);
                if (this.resolver.getPrototype(constructor) !== proto) {
                    throw new this.Error('Constructor mismatch!');
                }
                else {
                    object[this.prefix] = constructor;
                }
            }
        }
        object[this.refcode] = (_b = this.table) === null || _b === void 0 ? void 0 : _b.length;
        (_c = this.table) === null || _c === void 0 ? void 0 : _c.push(object);
        return object[this.refcode];
    }
    /**
     * Create a builder object (encoding) for serialization.
     * @param name The name of the constructor.
     * @param value The value to pass to the constructor.
     */
    builder(name, value) {
        const builder = {};
        builder[this.buildcode] = name;
        builder[this.valuecode] = value;
        return builder;
    }
    /**
     * Build a value from a deserialized builder.
     * @param ref
     * @see http://stackoverflow.com/a/14378462
     * @see http://nullprogram.com/blog/2013/03/24/
     */
    build(ref) {
        const type = ref[this.buildcode].split(/\./).reduce((object, name) => {
            return object[name];
        }, Resurrect.GLOBAL);
        /* Brilliant hack by kybernetikos: */
        const args = [null].concat(ref[this.valuecode]);
        const factory = type.bind.apply(type, args);
        const result = new factory();
        if (Resurrect.isPrimitive(result)) {
            if (!result) {
                return null;
            }
            return result.valueOf(); // unwrap
        }
        else {
            return result;
        }
    }
    /**
     * Dereference or build an object or value from an encoding.
     * @param ref
     */
    decode(ref) {
        if (this.prefix in ref) {
            return this.deref(ref);
        }
        else if (this.buildcode in ref) {
            return this.build(ref);
        }
        else {
            throw new this.Error('Unknown encoding.');
        }
    }
    /**
     * @param object
     * @returns True if the provided object is tagged for serialization.
     */
    isTagged(object) {
        return this.refcode in object && object[this.refcode] != null;
    }
    /**
     * Visit root and all its ancestors, visiting atoms with f.
     * @param root
     * @param f
     * @param replacer
     * @returns A fresh copy of root to be serialized.
     */
    visit(root, f, replacer) {
        if (Resurrect.isAtom(root)) {
            return f(root);
        }
        else if (!this.isTagged(root)) {
            let copy = null;
            if (Resurrect.isArray(root)) {
                copy = [];
                // @ts-ignore
                root[this.refcode] = this.tag(copy);
                for (let i = 0; i < root.length; i++) {
                    copy.push(this.visit(root[i], f, replacer));
                }
            }
            else {
                /* Object */
                copy = Object.create(Object.getPrototypeOf(root));
                root[this.refcode] = this.tag(copy);
                for (const key in root) {
                    let value = root[key];
                    if (Object.prototype.hasOwnProperty.call(root, key)) {
                        if (replacer && value !== undefined) {
                            // Call replacer like JSON.stringify's replacer
                            value = replacer.call(root, key, root[key]);
                            if (value === undefined) {
                                continue; // Omit from result
                            }
                        }
                        copy[key] = this.visit(value, f, replacer);
                    }
                }
            }
            copy[this.origcode] = root;
            return this.ref(copy);
        }
        else {
            return this.ref(root);
        }
    }
    /**
     * Manage special atom values, possibly returning an encoding.
     * @param atom
     */
    handleAtom(atom) {
        var _b;
        const Node = Resurrect.GLOBAL.Node || function () { };
        if (Resurrect.isFunction(atom)) {
            throw new this.Error("Can't serialize functions.");
        }
        else if (atom instanceof Node) {
            const xmls = new XMLSerializer();
            return this.builder('Resurrect.Node', [xmls.serializeToString(atom)]);
        }
        else if (Resurrect.isDate(atom)) {
            return this.builder('Date', [atom.toISOString()]);
        }
        else if (Resurrect.isRegExp(atom)) {
            const args = (_b = atom
                .toString()
                .match(/\/(.+)\/([gimy]*)/)) === null || _b === void 0 ? void 0 : _b.slice(1);
            return this.builder('RegExp', args);
        }
        else if (atom === undefined) {
            return this.ref(undefined);
        }
        else if (Resurrect.isNumber(atom) &&
            (isNaN(atom) || !isFinite(atom))) {
            return this.builder('Number', [atom.toString()]);
        }
        else {
            return atom;
        }
    }
    /**
     * Hides intrusive keys from a user-supplied replacer.
     * @param replacer function of two arguments (key, value)
     * @returns A function that skips the replacer for intrusive keys.
     */
    replacerWrapper(replacer) {
        const skip = new RegExp('^' + Resurrect.escapeRegExp(this.prefix));
        return (k, v) => {
            if (skip.test(k)) {
                return v;
            }
            else {
                return replacer(k, v);
            }
        };
    }
    /**
     * Serialize an arbitrary JavaScript object, carefully preserving it.
     * @param object
     * @param replacer
     * @param space
     */
    stringify(object, replacer, space) {
        if (Resurrect.isFunction(replacer)) {
            replacer = this.replacerWrapper(replacer);
        }
        else if (Resurrect.isArray(replacer)) {
            const acceptKeys = replacer;
            replacer = (k, v) => {
                return acceptKeys.indexOf(k) >= 0 ? v : undefined;
            };
        }
        if (Resurrect.isAtom(object)) {
            return JSON.stringify(this.handleAtom(object), replacer, space);
        }
        else {
            this.table = [];
            this.visit(object, this.handleAtom.bind(this), replacer);
            for (let i = 0; i < this.table.length; i++) {
                if (this.cleanup) {
                    delete this.table[i][this.origcode][this.refcode];
                }
                else {
                    this.table[i][this.origcode][this.refcode] = null;
                }
                delete this.table[i][this.refcode];
                delete this.table[i][this.origcode];
            }
            const table = this.table;
            this.table = null;
            return JSON.stringify(table, null, space);
        }
    }
    /**
     * Restore the __proto__ of the given object to the proper value.
     * @param object
     * @returns Its argument, or a copy, with the prototype restored.
     */
    fixPrototype(object) {
        if (this.prefix in object) {
            const name = object[this.prefix];
            const prototype = this.resolver.getPrototype(name);
            if ('__proto__' in object) {
                object.__proto__ = prototype;
                if (this.cleanup) {
                    delete object[this.prefix];
                }
                return object;
            }
            else {
                // IE
                const copy = Object.create(prototype);
                for (const key in object) {
                    if (Object.prototype.hasOwnProperty.call(object, key) &&
                        key !== this.prefix) {
                        copy[key] = object[key];
                    }
                }
                return copy;
            }
        }
        else {
            return object;
        }
    }
    /**
     * Deserialize an encoded object, restoring circularity and behavior.
     * @param string
     * @returns The decoded object or value.
     */
    resurrect(string) {
        let result = null;
        const data = JSON.parse(string);
        if (Resurrect.isArray(data)) {
            this.table = data;
            /* Restore __proto__. */
            if (this.revive) {
                for (let i = 0; i < this.table.length; i++) {
                    this.table[i] = this.fixPrototype(this.table[i]);
                }
            }
            /* Re-establish object references and construct atoms. */
            for (let i = 0; i < this.table.length; i++) {
                const object = this.table[i];
                for (const key in object) {
                    if (Object.prototype.hasOwnProperty.call(object, key)) {
                        if (!Resurrect.isAtom(object[key])) {
                            object[key] = this.decode(object[key]);
                        }
                    }
                }
            }
            result = this.table[0];
        }
        else if (Resurrect.isObject(data)) {
            this.table = [];
            result = this.decode(data);
        }
        else {
            result = data;
        }
        this.table = null;
        return result;
    }
}
/**
 * Portable access to the global object (window, global).
 * Uses indirect eval.
 * @constant
 */
Resurrect.GLOBAL = (0, eval)('this');
Resurrect.NamespaceResolver = NamespaceResolver;
Resurrect.isString = Resurrect.is('String');
Resurrect.isBoolean = Resurrect.is('Boolean');
Resurrect.isNumber = Resurrect.is('Number');
Resurrect.isFunction = Resurrect.is('Function');
Resurrect.isDate = Resurrect.is('Date');
Resurrect.isRegExp = Resurrect.is('RegExp');
Resurrect.isObject = Resurrect.is('Object');
exports["default"] = Resurrect;


/***/ }),

/***/ 954:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResurrectExtend = void 0;
const resurrect_1 = __importDefault(__webpack_require__(332));
const MatterTypes = __importStar(__webpack_require__(381));
const Matter = MatterTypes.default;
class ResurrectExtend extends resurrect_1.default {
    constructor() {
        super(...arguments);
        this.parse = () => { };
    }
}
exports.ResurrectExtend = ResurrectExtend;
/**
 * An (experimental) tool for serializing matter.js worlds.
 * @module Serializer
 */
class Serializer {
    /**
     * Creates a serializer.
     * @return A serializer
     */
    static create() {
        const serializer = new ResurrectExtend({ prefix: '$', cleanup: true });
        serializer.parse = serializer.resurrect;
        return serializer;
    }
    /**
     * Clones an object using a serializer and assigns it a new id
     * @function Serializer.clone
     * @param serializer
     * @param object
     * @return The clone
     */
    static clone(serializer, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    object) {
        const clone = serializer.parse(Serializer.serialise(serializer, object));
        clone.id = Matter.Common.nextId();
        return clone;
    }
    /**
     * Saves world state to local storage
     * @function Serializer.saveState
     * @param serializer
     * @param engine
     * @param key
     */
    static saveState(serializer, engine, key) {
        localStorage.setItem(key, Serializer.serialise(serializer, engine.world));
    }
    /**
     * Loads world state from local storage
     * @function Serializer.loadState
     * @param serializer
     * @param engine
     * @param key
     */
    static loadState(serializer, engine, key) {
        const item = localStorage.getItem(key);
        if (!item) {
            return;
        }
        const loadedWorld = serializer.parse(item);
        if (loadedWorld) {
            Matter.Engine.merge(engine, {
                world: loadedWorld,
            });
        }
    }
    /**
     * Serialises the object using the given serializer and a Matter-specific replacer
     * @function Serializer.serialise
     * @param serializer
     * @param object
     * @param indent
     * @return The serialised object
     */
    static serialise(serializer, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    object, indent = 0) {
        return serializer.stringify(object, 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (key, value) => {
            // limit precision of floats
            if (!/^#/.exec(key) && typeof value === 'number') {
                const fixed = parseFloat(value.toFixed(3));
                // do not limit if limiting will cause value to zero
                // TODO: this should ideally dynamically find the SF precision required
                if (fixed === 0 && value !== 0) {
                    return value;
                }
                return fixed;
            }
            return value;
        }, indent);
    }
}
exports["default"] = Serializer;


/***/ }),

/***/ 381:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__381__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(954);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});