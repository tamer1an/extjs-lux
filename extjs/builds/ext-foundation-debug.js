/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * @class Ext
 * @singleton
 */
(function() {
    var global = this,
        objectPrototype = Object.prototype,
        toString = objectPrototype.toString,
        enumerables = true,
        enumerablesTest = { toString: 1 },
        i;

    if (typeof Ext === 'undefined') {
        global.Ext = {};
    }

    Ext.global = global;

    for (i in enumerablesTest) {
        enumerables = null;
    }

    if (enumerables) {
        enumerables = ['hasOwnProperty', 'valueOf', 'isPrototypeOf', 'propertyIsEnumerable',
                       'toLocaleString', 'toString', 'constructor'];
    }

    /**
     * An array containing extra enumerables for old browsers
     * @property {String[]}
     */
    Ext.enumerables = enumerables;

    /**
     * Copies all the properties of config to the specified object.
     * Note that if recursive merging and cloning without referencing the original objects / arrays is needed, use
     * {@link Ext.Object#merge} instead.
     * @param {Object} object The receiver of the properties
     * @param {Object} config The source of the properties
     * @param {Object} defaults A different object that will also be applied for default values
     * @return {Object} returns obj
     */
    Ext.apply = function(object, config, defaults) {
        if (defaults) {
            Ext.apply(object, defaults);
        }

        if (object && config && typeof config === 'object') {
            var i, j, k;

            for (i in config) {
                object[i] = config[i];
            }

            if (enumerables) {
                for (j = enumerables.length; j--;) {
                    k = enumerables[j];
                    if (config.hasOwnProperty(k)) {
                        object[k] = config[k];
                    }
                }
            }
        }

        return object;
    };

    Ext.buildSettings = Ext.apply({
        baseCSSPrefix: 'x-',
        scopeResetCSS: false
    }, Ext.buildSettings || {});

    Ext.apply(Ext, {
        /**
         * A reusable empty function
         */
        emptyFn: function() {},

        baseCSSPrefix: Ext.buildSettings.baseCSSPrefix,

        /**
         * Copies all the properties of config to object if they don't already exist.
         * @param {Object} object The receiver of the properties
         * @param {Object} config The source of the properties
         * @return {Object} returns obj
         */
        applyIf: function(object, config) {
            var property;

            if (object) {
                for (property in config) {
                    if (object[property] === undefined) {
                        object[property] = config[property];
                    }
                }
            }

            return object;
        },

        /**
         * Iterates either an array or an object. This method delegates to
         * {@link Ext.Array#each Ext.Array.each} if the given value is iterable, and {@link Ext.Object#each Ext.Object.each} otherwise.
         *
         * @param {Object/Array} object The object or array to be iterated.
         * @param {Function} fn The function to be called for each iteration. See and {@link Ext.Array#each Ext.Array.each} and
         * {@link Ext.Object#each Ext.Object.each} for detailed lists of arguments passed to this function depending on the given object
         * type that is being iterated.
         * @param {Object} scope (Optional) The scope (`this` reference) in which the specified function is executed.
         * Defaults to the object being iterated itself.
         * @markdown
         */
        iterate: function(object, fn, scope) {
            if (Ext.isEmpty(object)) {
                return;
            }

            if (scope === undefined) {
                scope = object;
            }

            if (Ext.isIterable(object)) {
                Ext.Array.each.call(Ext.Array, object, fn, scope);
            }
            else {
                Ext.Object.each.call(Ext.Object, object, fn, scope);
            }
        }
    });

    Ext.apply(Ext, {

        /**
         * This method deprecated. Use {@link Ext#define Ext.define} instead.
         * @method
         * @param {Function} superclass
         * @param {Object} overrides
         * @return {Function} The subclass constructor from the <tt>overrides</tt> parameter, or a generated one if not provided.
         * @deprecated 4.0.0 Use {@link Ext#define Ext.define} instead
         */
        extend: function() {
            // inline overrides
            var objectConstructor = objectPrototype.constructor,
                inlineOverrides = function(o) {
                for (var m in o) {
                    if (!o.hasOwnProperty(m)) {
                        continue;
                    }
                    this[m] = o[m];
                }
            };

            return function(subclass, superclass, overrides) {
                // First we check if the user passed in just the superClass with overrides
                if (Ext.isObject(superclass)) {
                    overrides = superclass;
                    superclass = subclass;
                    subclass = overrides.constructor !== objectConstructor ? overrides.constructor : function() {
                        superclass.apply(this, arguments);
                    };
                }


                // We create a new temporary class
                var F = function() {},
                    subclassProto, superclassProto = superclass.prototype;

                F.prototype = superclassProto;
                subclassProto = subclass.prototype = new F();
                subclassProto.constructor = subclass;
                subclass.superclass = superclassProto;

                if (superclassProto.constructor === objectConstructor) {
                    superclassProto.constructor = superclass;
                }

                subclass.override = function(overrides) {
                    Ext.override(subclass, overrides);
                };

                subclassProto.override = inlineOverrides;
                subclassProto.proto = subclassProto;

                subclass.override(overrides);
                subclass.extend = function(o) {
                    return Ext.extend(subclass, o);
                };

                return subclass;
            };
        }(),

        /**
         * Proxy to {@link Ext.Base#override}. Please refer {@link Ext.Base#override} for further details.

    Ext.define('My.cool.Class', {
        sayHi: function() {
            alert('Hi!');
        }
    }

    Ext.override(My.cool.Class, {
        sayHi: function() {
            alert('About to say...');

            this.callOverridden();
        }
    });

    var cool = new My.cool.Class();
    cool.sayHi(); // alerts 'About to say...'
                  // alerts 'Hi!'

         * Please note that `this.callOverridden()` only works if the class was previously
         * created with {@link Ext#define)
         *
         * @param {Object} cls The class to override
         * @param {Object} overrides The list of functions to add to origClass. This should be specified as an object literal
         * containing one or more methods.
         * @method override
         * @markdown
         */
        override: function(cls, overrides) {
            if (cls.prototype.$className) {
                return cls.override(overrides);
            }
            else {
                Ext.apply(cls.prototype, overrides);
            }
        }
    });

    // A full set of static methods to do type checking
    Ext.apply(Ext, {

        /**
         * Returns the given value itself if it's not empty, as described in {@link Ext#isEmpty}; returns the default
         * value (second argument) otherwise.
         *
         * @param {Object} value The value to test
         * @param {Object} defaultValue The value to return if the original value is empty
         * @param {Boolean} allowBlank (optional) true to allow zero length strings to qualify as non-empty (defaults to false)
         * @return {Object} value, if non-empty, else defaultValue
         */
        valueFrom: function(value, defaultValue, allowBlank){
            return Ext.isEmpty(value, allowBlank) ? defaultValue : value;
        },

        /**
         * Returns the type of the given variable in string format. List of possible values are:
         *
         * - `undefined`: If the given value is `undefined`
         * - `null`: If the given value is `null`
         * - `string`: If the given value is a string
         * - `number`: If the given value is a number
         * - `boolean`: If the given value is a boolean value
         * - `date`: If the given value is a `Date` object
         * - `function`: If the given value is a function reference
         * - `object`: If the given value is an object
         * - `array`: If the given value is an array
         * - `regexp`: If the given value is a regular expression
         * - `element`: If the given value is a DOM Element
         * - `textnode`: If the given value is a DOM text node and contains something other than whitespace
         * - `whitespace`: If the given value is a DOM text node and contains only whitespace
         *
         * @param {Object} value
         * @return {String}
         * @markdown
         */
        typeOf: function(value) {
            if (value === null) {
                return 'null';
            }

            var type = typeof value;

            if (type === 'undefined' || type === 'string' || type === 'number' || type === 'boolean') {
                return type;
            }

            var typeToString = toString.call(value);

            switch(typeToString) {
                case '[object Array]':
                    return 'array';
                case '[object Date]':
                    return 'date';
                case '[object Boolean]':
                    return 'boolean';
                case '[object Number]':
                    return 'number';
                case '[object RegExp]':
                    return 'regexp';
            }

            if (type === 'function') {
                return 'function';
            }

            if (type === 'object') {
                if (value.nodeType !== undefined) {
                    if (value.nodeType === 3) {
                        return (/\S/).test(value.nodeValue) ? 'textnode' : 'whitespace';
                    }
                    else {
                        return 'element';
                    }
                }

                return 'object';
            }

        },

        /**
         * Returns true if the passed value is empty, false otherwise. The value is deemed to be empty if it is either:
         *
         * - `null`
         * - `undefined`
         * - a zero-length array
         * - a zero-length string (Unless the `allowEmptyString` parameter is set to `true`)
         *
         * @param {Object} value The value to test
         * @param {Boolean} allowEmptyString (optional) true to allow empty strings (defaults to false)
         * @return {Boolean}
         * @markdown
         */
        isEmpty: function(value, allowEmptyString) {
            return (value === null) || (value === undefined) || (!allowEmptyString ? value === '' : false) || (Ext.isArray(value) && value.length === 0);
        },

        /**
         * Returns true if the passed value is a JavaScript Array, false otherwise.
         *
         * @param {Object} target The target to test
         * @return {Boolean}
         * @method
         */
        isArray: ('isArray' in Array) ? Array.isArray : function(value) {
            return toString.call(value) === '[object Array]';
        },

        /**
         * Returns true if the passed value is a JavaScript Date object, false otherwise.
         * @param {Object} object The object to test
         * @return {Boolean}
         */
        isDate: function(value) {
            return toString.call(value) === '[object Date]';
        },

        /**
         * Returns true if the passed value is a JavaScript Object, false otherwise.
         * @param {Object} value The value to test
         * @return {Boolean}
         * @method
         */
        isObject: (toString.call(null) === '[object Object]') ?
        function(value) {
            // check ownerDocument here as well to exclude DOM nodes
            return value !== null && value !== undefined && toString.call(value) === '[object Object]' && value.ownerDocument === undefined;
        } :
        function(value) {
            return toString.call(value) === '[object Object]';
        },

        /**
         * Returns true if the passed value is a JavaScript 'primitive', a string, number or boolean.
         * @param {Object} value The value to test
         * @return {Boolean}
         */
        isPrimitive: function(value) {
            var type = typeof value;

            return type === 'string' || type === 'number' || type === 'boolean';
        },

        /**
         * Returns true if the passed value is a JavaScript Function, false otherwise.
         * @param {Object} value The value to test
         * @return {Boolean}
         * @method
         */
        isFunction:
        // Safari 3.x and 4.x returns 'function' for typeof <NodeList>, hence we need to fall back to using
        // Object.prorotype.toString (slower)
        (typeof document !== 'undefined' && typeof document.getElementsByTagName('body') === 'function') ? function(value) {
            return toString.call(value) === '[object Function]';
        } : function(value) {
            return typeof value === 'function';
        },

        /**
         * Returns true if the passed value is a number. Returns false for non-finite numbers.
         * @param {Object} value The value to test
         * @return {Boolean}
         */
        isNumber: function(value) {
            return typeof value === 'number' && isFinite(value);
        },

        /**
         * Validates that a value is numeric.
         * @param {Object} value Examples: 1, '1', '2.34'
         * @return {Boolean} True if numeric, false otherwise
         */
        isNumeric: function(value) {
            return !isNaN(parseFloat(value)) && isFinite(value);
        },

        /**
         * Returns true if the passed value is a string.
         * @param {Object} value The value to test
         * @return {Boolean}
         */
        isString: function(value) {
            return typeof value === 'string';
        },

        /**
         * Returns true if the passed value is a boolean.
         *
         * @param {Object} value The value to test
         * @return {Boolean}
         */
        isBoolean: function(value) {
            return typeof value === 'boolean';
        },

        /**
         * Returns true if the passed value is an HTMLElement
         * @param {Object} value The value to test
         * @return {Boolean}
         */
        isElement: function(value) {
            return value ? value.nodeType === 1 : false;
        },

        /**
         * Returns true if the passed value is a TextNode
         * @param {Object} value The value to test
         * @return {Boolean}
         */
        isTextNode: function(value) {
            return value ? value.nodeName === "#text" : false;
        },

        /**
         * Returns true if the passed value is defined.
         * @param {Object} value The value to test
         * @return {Boolean}
         */
        isDefined: function(value) {
            return typeof value !== 'undefined';
        },

        /**
         * Returns true if the passed value is iterable, false otherwise
         * @param {Object} value The value to test
         * @return {Boolean}
         */
        isIterable: function(value) {
            return (value && typeof value !== 'string') ? value.length !== undefined : false;
        }
    });

    Ext.apply(Ext, {

        /**
         * Clone almost any type of variable including array, object, DOM nodes and Date without keeping the old reference
         * @param {Object} item The variable to clone
         * @return {Object} clone
         */
        clone: function(item) {
            if (item === null || item === undefined) {
                return item;
            }

            // DOM nodes
            // TODO proxy this to Ext.Element.clone to handle automatic id attribute changing
            // recursively
            if (item.nodeType && item.cloneNode) {
                return item.cloneNode(true);
            }

            var type = toString.call(item);

            // Date
            if (type === '[object Date]') {
                return new Date(item.getTime());
            }

            var i, j, k, clone, key;

            // Array
            if (type === '[object Array]') {
                i = item.length;

                clone = [];

                while (i--) {
                    clone[i] = Ext.clone(item[i]);
                }
            }
            // Object
            else if (type === '[object Object]' && item.constructor === Object) {
                clone = {};

                for (key in item) {
                    clone[key] = Ext.clone(item[key]);
                }

                if (enumerables) {
                    for (j = enumerables.length; j--;) {
                        k = enumerables[j];
                        clone[k] = item[k];
                    }
                }
            }

            return clone || item;
        },

        /**
         * @private
         * Generate a unique reference of Ext in the global scope, useful for sandboxing
         */
        getUniqueGlobalNamespace: function() {
            var uniqueGlobalNamespace = this.uniqueGlobalNamespace;

            if (uniqueGlobalNamespace === undefined) {
                var i = 0;

                do {
                    uniqueGlobalNamespace = 'ExtBox' + (++i);
                } while (Ext.global[uniqueGlobalNamespace] !== undefined);

                Ext.global[uniqueGlobalNamespace] = Ext;
                this.uniqueGlobalNamespace = uniqueGlobalNamespace;
            }

            return uniqueGlobalNamespace;
        },

        /**
         * @private
         */
        functionFactory: function() {
            var args = Array.prototype.slice.call(arguments);

            if (args.length > 0) {
                args[args.length - 1] = 'var Ext=window.' + this.getUniqueGlobalNamespace() + ';' +
                    args[args.length - 1];
            }

            return Function.prototype.constructor.apply(Function.prototype, args);
        }
    });

    /**
     * Old alias to {@link Ext#typeOf}
     * @deprecated 4.0.0 Use {@link Ext#typeOf} instead
     * @method
     * @alias Ext#typeOf
     */
    Ext.type = Ext.typeOf;

})();

/**
 * @author Jacky Nguyen <jacky@sencha.com>
 * @docauthor Jacky Nguyen <jacky@sencha.com>
 * @class Ext.Version
 *
 * A utility class that wrap around a string version number and provide convenient
 * method to perform comparison. See also: {@link Ext.Version#compare compare}. Example:

    var version = new Ext.Version('1.0.2beta');
    console.log("Version is " + version); // Version is 1.0.2beta

    console.log(version.getMajor()); // 1
    console.log(version.getMinor()); // 0
    console.log(version.getPatch()); // 2
    console.log(version.getBuild()); // 0
    console.log(version.getRelease()); // beta

    console.log(version.isGreaterThan('1.0.1')); // True
    console.log(version.isGreaterThan('1.0.2alpha')); // True
    console.log(version.isGreaterThan('1.0.2RC')); // False
    console.log(version.isGreaterThan('1.0.2')); // False
    console.log(version.isLessThan('1.0.2')); // True

    console.log(version.match(1.0)); // True
    console.log(version.match('1.0.2')); // True

 * @markdown
 */
(function() {

// Current core version
var version = '4.0.7', Version;
    Ext.Version = Version = Ext.extend(Object, {

        /**
         * @param {String/Number} version The version number in the follow standard format: major[.minor[.patch[.build[release]]]]
         * Examples: 1.0 or 1.2.3beta or 1.2.3.4RC
         * @return {Ext.Version} this
         */
        constructor: function(version) {
            var parts, releaseStartIndex;

            if (version instanceof Version) {
                return version;
            }

            this.version = this.shortVersion = String(version).toLowerCase().replace(/_/g, '.').replace(/[\-+]/g, '');

            releaseStartIndex = this.version.search(/([^\d\.])/);

            if (releaseStartIndex !== -1) {
                this.release = this.version.substr(releaseStartIndex, version.length);
                this.shortVersion = this.version.substr(0, releaseStartIndex);
            }

            this.shortVersion = this.shortVersion.replace(/[^\d]/g, '');

            parts = this.version.split('.');

            this.major = parseInt(parts.shift() || 0, 10);
            this.minor = parseInt(parts.shift() || 0, 10);
            this.patch = parseInt(parts.shift() || 0, 10);
            this.build = parseInt(parts.shift() || 0, 10);

            return this;
        },

        /**
         * Override the native toString method
         * @private
         * @return {String} version
         */
        toString: function() {
            return this.version;
        },

        /**
         * Override the native valueOf method
         * @private
         * @return {String} version
         */
        valueOf: function() {
            return this.version;
        },

        /**
         * Returns the major component value
         * @return {Number} major
         */
        getMajor: function() {
            return this.major || 0;
        },

        /**
         * Returns the minor component value
         * @return {Number} minor
         */
        getMinor: function() {
            return this.minor || 0;
        },

        /**
         * Returns the patch component value
         * @return {Number} patch
         */
        getPatch: function() {
            return this.patch || 0;
        },

        /**
         * Returns the build component value
         * @return {Number} build
         */
        getBuild: function() {
            return this.build || 0;
        },

        /**
         * Returns the release component value
         * @return {Number} release
         */
        getRelease: function() {
            return this.release || '';
        },

        /**
         * Returns whether this version if greater than the supplied argument
         * @param {String/Number} target The version to compare with
         * @return {Boolean} True if this version if greater than the target, false otherwise
         */
        isGreaterThan: function(target) {
            return Version.compare(this.version, target) === 1;
        },

        /**
         * Returns whether this version if smaller than the supplied argument
         * @param {String/Number} target The version to compare with
         * @return {Boolean} True if this version if smaller than the target, false otherwise
         */
        isLessThan: function(target) {
            return Version.compare(this.version, target) === -1;
        },

        /**
         * Returns whether this version equals to the supplied argument
         * @param {String/Number} target The version to compare with
         * @return {Boolean} True if this version equals to the target, false otherwise
         */
        equals: function(target) {
            return Version.compare(this.version, target) === 0;
        },

        /**
         * Returns whether this version matches the supplied argument. Example:
         * <pre><code>
         * var version = new Ext.Version('1.0.2beta');
         * console.log(version.match(1)); // True
         * console.log(version.match(1.0)); // True
         * console.log(version.match('1.0.2')); // True
         * console.log(version.match('1.0.2RC')); // False
         * </code></pre>
         * @param {String/Number} target The version to compare with
         * @return {Boolean} True if this version matches the target, false otherwise
         */
        match: function(target) {
            target = String(target);
            return this.version.substr(0, target.length) === target;
        },

        /**
         * Returns this format: [major, minor, patch, build, release]. Useful for comparison
         * @return {Number[]}
         */
        toArray: function() {
            return [this.getMajor(), this.getMinor(), this.getPatch(), this.getBuild(), this.getRelease()];
        },

        /**
         * Returns shortVersion version without dots and release
         * @return {String}
         */
        getShortVersion: function() {
            return this.shortVersion;
        }
    });

    Ext.apply(Version, {
        // @private
        releaseValueMap: {
            'dev': -6,
            'alpha': -5,
            'a': -5,
            'beta': -4,
            'b': -4,
            'rc': -3,
            '#': -2,
            'p': -1,
            'pl': -1
        },

        /**
         * Converts a version component to a comparable value
         *
         * @static
         * @param {Object} value The value to convert
         * @return {Object}
         */
        getComponentValue: function(value) {
            return !value ? 0 : (isNaN(value) ? this.releaseValueMap[value] || value : parseInt(value, 10));
        },

        /**
         * Compare 2 specified versions, starting from left to right. If a part contains special version strings,
         * they are handled in the following order:
         * 'dev' < 'alpha' = 'a' < 'beta' = 'b' < 'RC' = 'rc' < '#' < 'pl' = 'p' < 'anything else'
         *
         * @static
         * @param {String} current The current version to compare to
         * @param {String} target The target version to compare to
         * @return {Number} Returns -1 if the current version is smaller than the target version, 1 if greater, and 0 if they're equivalent
         */
        compare: function(current, target) {
            var currentValue, targetValue, i;

            current = new Version(current).toArray();
            target = new Version(target).toArray();

            for (i = 0; i < Math.max(current.length, target.length); i++) {
                currentValue = this.getComponentValue(current[i]);
                targetValue = this.getComponentValue(target[i]);

                if (currentValue < targetValue) {
                    return -1;
                } else if (currentValue > targetValue) {
                    return 1;
                }
            }

            return 0;
        }
    });

    Ext.apply(Ext, {
        /**
         * @private
         */
        versions: {},

        /**
         * @private
         */
        lastRegisteredVersion: null,

        /**
         * Set version number for the given package name.
         *
         * @param {String} packageName The package name, for example: 'core', 'touch', 'extjs'
         * @param {String/Ext.Version} version The version, for example: '1.2.3alpha', '2.4.0-dev'
         * @return {Ext}
         */
        setVersion: function(packageName, version) {
            Ext.versions[packageName] = new Version(version);
            Ext.lastRegisteredVersion = Ext.versions[packageName];

            return this;
        },

        /**
         * Get the version number of the supplied package name; will return the last registered version
         * (last Ext.setVersion call) if there's no package name given.
         *
         * @param {String} packageName (Optional) The package name, for example: 'core', 'touch', 'extjs'
         * @return {Ext.Version} The version
         */
        getVersion: function(packageName) {
            if (packageName === undefined) {
                return Ext.lastRegisteredVersion;
            }

            return Ext.versions[packageName];
        },

        /**
         * Create a closure for deprecated code.
         *
    // This means Ext.oldMethod is only supported in 4.0.0beta and older.
    // If Ext.getVersion('extjs') returns a version that is later than '4.0.0beta', for example '4.0.0RC',
    // the closure will not be invoked
    Ext.deprecate('extjs', '4.0.0beta', function() {
        Ext.oldMethod = Ext.newMethod;

        ...
    });

         * @param {String} packageName The package name
         * @param {String} since The last version before it's deprecated
         * @param {Function} closure The callback function to be executed with the specified version is less than the current version
         * @param {Object} scope The execution scope (<tt>this</tt>) if the closure
         * @markdown
         */
        deprecate: function(packageName, since, closure, scope) {
            if (Version.compare(Ext.getVersion(packageName), since) < 1) {
                closure.call(scope);
            }
        }
    }); // End Versioning

    Ext.setVersion('core', version);

})();

/**
 * @class Ext.String
 *
 * A collection of useful static methods to deal with strings
 * @singleton
 */

Ext.String = {
    trimRegex: /^[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]+|[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]+$/g,
    escapeRe: /('|\\)/g,
    formatRe: /\{(\d+)\}/g,
    escapeRegexRe: /([-.*+?^${}()|[\]\/\\])/g,

    /**
     * Convert certain characters (&, <, >, and ") to their HTML character equivalents for literal display in web pages.
     * @param {String} value The string to encode
     * @return {String} The encoded text
     * @method
     */
    htmlEncode: (function() {
        var entities = {
            '&': '&amp;',
            '>': '&gt;',
            '<': '&lt;',
            '"': '&quot;'
        }, keys = [], p, regex;
        
        for (p in entities) {
            keys.push(p);
        }
        
        regex = new RegExp('(' + keys.join('|') + ')', 'g');
        
        return function(value) {
            return (!value) ? value : String(value).replace(regex, function(match, capture) {
                return entities[capture];    
            });
        };
    })(),

    /**
     * Convert certain characters (&, <, >, and ") from their HTML character equivalents.
     * @param {String} value The string to decode
     * @return {String} The decoded text
     * @method
     */
    htmlDecode: (function() {
        var entities = {
            '&amp;': '&',
            '&gt;': '>',
            '&lt;': '<',
            '&quot;': '"'
        }, keys = [], p, regex;
        
        for (p in entities) {
            keys.push(p);
        }
        
        regex = new RegExp('(' + keys.join('|') + '|&#[0-9]{1,5};' + ')', 'g');
        
        return function(value) {
            return (!value) ? value : String(value).replace(regex, function(match, capture) {
                if (capture in entities) {
                    return entities[capture];
                } else {
                    return String.fromCharCode(parseInt(capture.substr(2), 10));
                }
            });
        };
    })(),

    /**
     * Appends content to the query string of a URL, handling logic for whether to place
     * a question mark or ampersand.
     * @param {String} url The URL to append to.
     * @param {String} string The content to append to the URL.
     * @return (String) The resulting URL
     */
    urlAppend : function(url, string) {
        if (!Ext.isEmpty(string)) {
            return url + (url.indexOf('?') === -1 ? '?' : '&') + string;
        }

        return url;
    },

    /**
     * Trims whitespace from either end of a string, leaving spaces within the string intact.  Example:
     * @example
var s = '  foo bar  ';
alert('-' + s + '-');         //alerts "- foo bar -"
alert('-' + Ext.String.trim(s) + '-');  //alerts "-foo bar-"

     * @param {String} string The string to escape
     * @return {String} The trimmed string
     */
    trim: function(string) {
        return string.replace(Ext.String.trimRegex, "");
    },

    /**
     * Capitalize the given string
     * @param {String} string
     * @return {String}
     */
    capitalize: function(string) {
        return string.charAt(0).toUpperCase() + string.substr(1);
    },

    /**
     * Truncate a string and add an ellipsis ('...') to the end if it exceeds the specified length
     * @param {String} value The string to truncate
     * @param {Number} length The maximum length to allow before truncating
     * @param {Boolean} word True to try to find a common word break
     * @return {String} The converted text
     */
    ellipsis: function(value, len, word) {
        if (value && value.length > len) {
            if (word) {
                var vs = value.substr(0, len - 2),
                index = Math.max(vs.lastIndexOf(' '), vs.lastIndexOf('.'), vs.lastIndexOf('!'), vs.lastIndexOf('?'));
                if (index !== -1 && index >= (len - 15)) {
                    return vs.substr(0, index) + "...";
                }
            }
            return value.substr(0, len - 3) + "...";
        }
        return value;
    },

    /**
     * Escapes the passed string for use in a regular expression
     * @param {String} string
     * @return {String}
     */
    escapeRegex: function(string) {
        return string.replace(Ext.String.escapeRegexRe, "\\$1");
    },

    /**
     * Escapes the passed string for ' and \
     * @param {String} string The string to escape
     * @return {String} The escaped string
     */
    escape: function(string) {
        return string.replace(Ext.String.escapeRe, "\\$1");
    },

    /**
     * Utility function that allows you to easily switch a string between two alternating values.  The passed value
     * is compared to the current string, and if they are equal, the other value that was passed in is returned.  If
     * they are already different, the first value passed in is returned.  Note that this method returns the new value
     * but does not change the current string.
     * <pre><code>
    // alternate sort directions
    sort = Ext.String.toggle(sort, 'ASC', 'DESC');

    // instead of conditional logic:
    sort = (sort == 'ASC' ? 'DESC' : 'ASC');
       </code></pre>
     * @param {String} string The current string
     * @param {String} value The value to compare to the current string
     * @param {String} other The new value to use if the string already equals the first value passed in
     * @return {String} The new value
     */
    toggle: function(string, value, other) {
        return string === value ? other : value;
    },

    /**
     * Pads the left side of a string with a specified character.  This is especially useful
     * for normalizing number and date strings.  Example usage:
     *
     * <pre><code>
var s = Ext.String.leftPad('123', 5, '0');
// s now contains the string: '00123'
       </code></pre>
     * @param {String} string The original string
     * @param {Number} size The total length of the output string
     * @param {String} character (optional) The character with which to pad the original string (defaults to empty string " ")
     * @return {String} The padded string
     */
    leftPad: function(string, size, character) {
        var result = String(string);
        character = character || " ";
        while (result.length < size) {
            result = character + result;
        }
        return result;
    },

    /**
     * Allows you to define a tokenized string and pass an arbitrary number of arguments to replace the tokens.  Each
     * token must be unique, and must increment in the format {0}, {1}, etc.  Example usage:
     * <pre><code>
var cls = 'my-class', text = 'Some text';
var s = Ext.String.format('&lt;div class="{0}">{1}&lt;/div>', cls, text);
// s now contains the string: '&lt;div class="my-class">Some text&lt;/div>'
       </code></pre>
     * @param {String} string The tokenized string to be formatted
     * @param {String} value1 The value to replace token {0}
     * @param {String} value2 Etc...
     * @return {String} The formatted string
     */
    format: function(format) {
        var args = Ext.Array.toArray(arguments, 1);
        return format.replace(Ext.String.formatRe, function(m, i) {
            return args[i];
        });
    },

    /**
     * Returns a string with a specified number of repititions a given string pattern.
     * The pattern be separated by a different string.
     *
     *      var s = Ext.String.repeat('---', 4); // = '------------'
     *      var t = Ext.String.repeat('--', 3, '/'); // = '--/--/--'
     *
     * @param {String} pattern The pattern to repeat.
     * @param {Number} count The number of times to repeat the pattern (may be 0).
     * @param {String} sep An option string to separate each pattern.
     */
    repeat: function(pattern, count, sep) {
        for (var buf = [], i = count; i--; ) {
            buf.push(pattern);
        }
        return buf.join(sep || '');
    }
};

/**
 * @class Ext.Number
 *
 * A collection of useful static methods to deal with numbers
 * @singleton
 */

(function() {

var isToFixedBroken = (0.9).toFixed() !== '1';

Ext.Number = {
    /**
     * Checks whether or not the passed number is within a desired range.  If the number is already within the
     * range it is returned, otherwise the min or max value is returned depending on which side of the range is
     * exceeded. Note that this method returns the constrained value but does not change the current number.
     * @param {Number} number The number to check
     * @param {Number} min The minimum number in the range
     * @param {Number} max The maximum number in the range
     * @return {Number} The constrained value if outside the range, otherwise the current value
     */
    constrain: function(number, min, max) {
        number = parseFloat(number);

        if (!isNaN(min)) {
            number = Math.max(number, min);
        }
        if (!isNaN(max)) {
            number = Math.min(number, max);
        }
        return number;
    },

    /**
     * Snaps the passed number between stopping points based upon a passed increment value.
     * @param {Number} value The unsnapped value.
     * @param {Number} increment The increment by which the value must move.
     * @param {Number} minValue The minimum value to which the returned value must be constrained. Overrides the increment..
     * @param {Number} maxValue The maximum value to which the returned value must be constrained. Overrides the increment..
     * @return {Number} The value of the nearest snap target.
     */
    snap : function(value, increment, minValue, maxValue) {
        var newValue = value,
            m;

        if (!(increment && value)) {
            return value;
        }
        m = value % increment;
        if (m !== 0) {
            newValue -= m;
            if (m * 2 >= increment) {
                newValue += increment;
            } else if (m * 2 < -increment) {
                newValue -= increment;
            }
        }
        return Ext.Number.constrain(newValue, minValue,  maxValue);
    },

    /**
     * Formats a number using fixed-point notation
     * @param {Number} value The number to format
     * @param {Number} precision The number of digits to show after the decimal point
     */
    toFixed: function(value, precision) {
        if (isToFixedBroken) {
            precision = precision || 0;
            var pow = Math.pow(10, precision);
            return (Math.round(value * pow) / pow).toFixed(precision);
        }

        return value.toFixed(precision);
    },

    /**
     * Validate that a value is numeric and convert it to a number if necessary. Returns the specified default value if
     * it is not.

Ext.Number.from('1.23', 1); // returns 1.23
Ext.Number.from('abc', 1); // returns 1

     * @param {Object} value
     * @param {Number} defaultValue The value to return if the original value is non-numeric
     * @return {Number} value, if numeric, defaultValue otherwise
     */
    from: function(value, defaultValue) {
        if (isFinite(value)) {
            value = parseFloat(value);
        }

        return !isNaN(value) ? value : defaultValue;
    }
};

})();

/**
 * @deprecated 4.0.0 Please use {@link Ext.Number#from} instead.
 * @member Ext
 * @method num
 * @alias Ext.Number#from
 */
Ext.num = function() {
    return Ext.Number.from.apply(this, arguments);
};
/**
 * @class Ext.Array
 * @singleton
 * @author Jacky Nguyen <jacky@sencha.com>
 * @docauthor Jacky Nguyen <jacky@sencha.com>
 *
 * A set of useful static methods to deal with arrays; provide missing methods for older browsers.
 */
(function() {

    var arrayPrototype = Array.prototype,
        slice = arrayPrototype.slice,
        supportsSplice = function () {
            var array = [],
                lengthBefore,
                j = 20;

            if (!array.splice) {
                return false;
            }

            // This detects a bug in IE8 splice method:
            // see http://social.msdn.microsoft.com/Forums/en-US/iewebdevelopment/thread/6e946d03-e09f-4b22-a4dd-cd5e276bf05a/

            while (j--) {
                array.push("A");
            }

            array.splice(15, 0, "F", "F", "F", "F", "F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F");

            lengthBefore = array.length; //41
            array.splice(13, 0, "XXX"); // add one element

            if (lengthBefore+1 != array.length) {
                return false;
            }
            // end IE8 bug

            return true;
        }(),
        supportsForEach = 'forEach' in arrayPrototype,
        supportsMap = 'map' in arrayPrototype,
        supportsIndexOf = 'indexOf' in arrayPrototype,
        supportsEvery = 'every' in arrayPrototype,
        supportsSome = 'some' in arrayPrototype,
        supportsFilter = 'filter' in arrayPrototype,
        supportsSort = function() {
            var a = [1,2,3,4,5].sort(function(){ return 0; });
            return a[0] === 1 && a[1] === 2 && a[2] === 3 && a[3] === 4 && a[4] === 5;
        }(),
        supportsSliceOnNodeList = true,
        ExtArray;

    try {
        // IE 6 - 8 will throw an error when using Array.prototype.slice on NodeList
        if (typeof document !== 'undefined') {
            slice.call(document.getElementsByTagName('body'));
        }
    } catch (e) {
        supportsSliceOnNodeList = false;
    }

    function fixArrayIndex (array, index) {
        return (index < 0) ? Math.max(0, array.length + index)
                           : Math.min(array.length, index);
    }

    /*
    Does the same work as splice, but with a slightly more convenient signature. The splice
    method has bugs in IE8, so this is the implementation we use on that platform.

    The rippling of items in the array can be tricky. Consider two use cases:

                  index=2
                  removeCount=2
                 /=====\
        +---+---+---+---+---+---+---+---+
        | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
        +---+---+---+---+---+---+---+---+
                         /  \/  \/  \/  \
                        /   /\  /\  /\   \
                       /   /  \/  \/  \   +--------------------------+
                      /   /   /\  /\   +--------------------------+   \
                     /   /   /  \/  +--------------------------+   \   \
                    /   /   /   /+--------------------------+   \   \   \
                   /   /   /   /                             \   \   \   \
                  v   v   v   v                               v   v   v   v
        +---+---+---+---+---+---+       +---+---+---+---+---+---+---+---+---+
        | 0 | 1 | 4 | 5 | 6 | 7 |       | 0 | 1 | a | b | c | 4 | 5 | 6 | 7 |
        +---+---+---+---+---+---+       +---+---+---+---+---+---+---+---+---+
        A                               B        \=========/
                                                 insert=[a,b,c]

    In case A, it is obvious that copying of [4,5,6,7] must be left-to-right so
    that we don't end up with [0,1,6,7,6,7]. In case B, we have the opposite; we
    must go right-to-left or else we would end up with [0,1,a,b,c,4,4,4,4].
    */
    function replaceSim (array, index, removeCount, insert) {
        var add = insert ? insert.length : 0,
            length = array.length,
            pos = fixArrayIndex(array, index);

        // we try to use Array.push when we can for efficiency...
        if (pos === length) {
            if (add) {
                array.push.apply(array, insert);
            }
        } else {
            var remove = Math.min(removeCount, length - pos),
                tailOldPos = pos + remove,
                tailNewPos = tailOldPos + add - remove,
                tailCount = length - tailOldPos,
                lengthAfterRemove = length - remove,
                i;

            if (tailNewPos < tailOldPos) { // case A
                for (i = 0; i < tailCount; ++i) {
                    array[tailNewPos+i] = array[tailOldPos+i];
                }
            } else if (tailNewPos > tailOldPos) { // case B
                for (i = tailCount; i--; ) {
                    array[tailNewPos+i] = array[tailOldPos+i];
                }
            } // else, add == remove (nothing to do)

            if (add && pos === lengthAfterRemove) {
                array.length = lengthAfterRemove; // truncate array
                array.push.apply(array, insert);
            } else {
                array.length = lengthAfterRemove + add; // reserves space
                for (i = 0; i < add; ++i) {
                    array[pos+i] = insert[i];
                }
            }
        }

        return array;
    }

    function replaceNative (array, index, removeCount, insert) {
        if (insert && insert.length) {
            if (index < array.length) {
                array.splice.apply(array, [index, removeCount].concat(insert));
            } else {
                array.push.apply(array, insert);
            }
        } else {
            array.splice(index, removeCount);
        }
        return array;
    }

    function eraseSim (array, index, removeCount) {
        return replaceSim(array, index, removeCount);
    }

    function eraseNative (array, index, removeCount) {
        array.splice(index, removeCount);
        return array;
    }

    function spliceSim (array, index, removeCount) {
        var pos = fixArrayIndex(array, index),
            removed = array.slice(index, fixArrayIndex(array, pos+removeCount));

        if (arguments.length < 4) {
            replaceSim(array, pos, removeCount);
        } else {
            replaceSim(array, pos, removeCount, slice.call(arguments, 3));
        }

        return removed;
    }

    function spliceNative (array) {
        return array.splice.apply(array, slice.call(arguments, 1));
    }

    var erase = supportsSplice ? eraseNative : eraseSim,
        replace = supportsSplice ? replaceNative : replaceSim,
        splice = supportsSplice ? spliceNative : spliceSim;

    // NOTE: from here on, use erase, replace or splice (not native methods)...

    ExtArray = Ext.Array = {
        /**
         * Iterates an array or an iterable value and invoke the given callback function for each item.
         *
         *     var countries = ['Vietnam', 'Singapore', 'United States', 'Russia'];
         *
         *     Ext.Array.each(countries, function(name, index, countriesItSelf) {
         *         console.log(name);
         *     });
         *
         *     var sum = function() {
         *         var sum = 0;
         *
         *         Ext.Array.each(arguments, function(value) {
         *             sum += value;
         *         });
         *
         *         return sum;
         *     };
         *
         *     sum(1, 2, 3); // returns 6
         *
         * The iteration can be stopped by returning false in the function callback.
         *
         *     Ext.Array.each(countries, function(name, index, countriesItSelf) {
         *         if (name === 'Singapore') {
         *             return false; // break here
         *         }
         *     });
         *
         * {@link Ext#each Ext.each} is alias for {@link Ext.Array#each Ext.Array.each}
         *
         * @param {Array/NodeList/Object} iterable The value to be iterated. If this
         * argument is not iterable, the callback function is called once.
         * @param {Function} fn The callback function. If it returns false, the iteration stops and this method returns
         * the current `index`.
         * @param {Object} fn.item The item at the current `index` in the passed `array`
         * @param {Number} fn.index The current `index` within the `array`
         * @param {Array} fn.allItems The `array` itself which was passed as the first argument
         * @param {Boolean} fn.return Return false to stop iteration.
         * @param {Object} scope (Optional) The scope (`this` reference) in which the specified function is executed.
         * @param {Boolean} reverse (Optional) Reverse the iteration order (loop from the end to the beginning)
         * Defaults false
         * @return {Boolean} See description for the `fn` parameter.
         */
        each: function(array, fn, scope, reverse) {
            array = ExtArray.from(array);

            var i,
                ln = array.length;

            if (reverse !== true) {
                for (i = 0; i < ln; i++) {
                    if (fn.call(scope || array[i], array[i], i, array) === false) {
                        return i;
                    }
                }
            }
            else {
                for (i = ln - 1; i > -1; i--) {
                    if (fn.call(scope || array[i], array[i], i, array) === false) {
                        return i;
                    }
                }
            }

            return true;
        },

        /**
         * Iterates an array and invoke the given callback function for each item. Note that this will simply
         * delegate to the native Array.prototype.forEach method if supported. It doesn't support stopping the
         * iteration by returning false in the callback function like {@link Ext.Array#each}. However, performance
         * could be much better in modern browsers comparing with {@link Ext.Array#each}
         *
         * @param {Array} array The array to iterate
         * @param {Function} fn The callback function.
         * @param {Object} fn.item The item at the current `index` in the passed `array`
         * @param {Number} fn.index The current `index` within the `array`
         * @param {Array}  fn.allItems The `array` itself which was passed as the first argument
         * @param {Object} scope (Optional) The execution scope (`this`) in which the specified function is executed.
         */
        forEach: function(array, fn, scope) {
            if (supportsForEach) {
                return array.forEach(fn, scope);
            }

            var i = 0,
                ln = array.length;

            for (; i < ln; i++) {
                fn.call(scope, array[i], i, array);
            }
        },

        /**
         * Get the index of the provided `item` in the given `array`, a supplement for the
         * missing arrayPrototype.indexOf in Internet Explorer.
         *
         * @param {Array} array The array to check
         * @param {Object} item The item to look for
         * @param {Number} from (Optional) The index at which to begin the search
         * @return {Number} The index of item in the array (or -1 if it is not found)
         */
        indexOf: function(array, item, from) {
            if (supportsIndexOf) {
                return array.indexOf(item, from);
            }

            var i, length = array.length;

            for (i = (from < 0) ? Math.max(0, length + from) : from || 0; i < length; i++) {
                if (array[i] === item) {
                    return i;
                }
            }

            return -1;
        },

        /**
         * Checks whether or not the given `array` contains the specified `item`
         *
         * @param {Array} array The array to check
         * @param {Object} item The item to look for
         * @return {Boolean} True if the array contains the item, false otherwise
         */
        contains: function(array, item) {
            if (supportsIndexOf) {
                return array.indexOf(item) !== -1;
            }

            var i, ln;

            for (i = 0, ln = array.length; i < ln; i++) {
                if (array[i] === item) {
                    return true;
                }
            }

            return false;
        },

        /**
         * Converts any iterable (numeric indices and a length property) into a true array.
         *
         *     function test() {
         *         var args = Ext.Array.toArray(arguments),
         *             fromSecondToLastArgs = Ext.Array.toArray(arguments, 1);
         *
         *         alert(args.join(' '));
         *         alert(fromSecondToLastArgs.join(' '));
         *     }
         *
         *     test('just', 'testing', 'here'); // alerts 'just testing here';
         *                                      // alerts 'testing here';
         *
         *     Ext.Array.toArray(document.getElementsByTagName('div')); // will convert the NodeList into an array
         *     Ext.Array.toArray('splitted'); // returns ['s', 'p', 'l', 'i', 't', 't', 'e', 'd']
         *     Ext.Array.toArray('splitted', 0, 3); // returns ['s', 'p', 'l', 'i']
         *
         * {@link Ext#toArray Ext.toArray} is alias for {@link Ext.Array#toArray Ext.Array.toArray}
         *
         * @param {Object} iterable the iterable object to be turned into a true Array.
         * @param {Number} start (Optional) a zero-based index that specifies the start of extraction. Defaults to 0
         * @param {Number} end (Optional) a zero-based index that specifies the end of extraction. Defaults to the last
         * index of the iterable value
         * @return {Array} array
         */
        toArray: function(iterable, start, end){
            if (!iterable || !iterable.length) {
                return [];
            }

            if (typeof iterable === 'string') {
                iterable = iterable.split('');
            }

            if (supportsSliceOnNodeList) {
                return slice.call(iterable, start || 0, end || iterable.length);
            }

            var array = [],
                i;

            start = start || 0;
            end = end ? ((end < 0) ? iterable.length + end : end) : iterable.length;

            for (i = start; i < end; i++) {
                array.push(iterable[i]);
            }

            return array;
        },

        /**
         * Plucks the value of a property from each item in the Array. Example:
         *
         *     Ext.Array.pluck(Ext.query("p"), "className"); // [el1.className, el2.className, ..., elN.className]
         *
         * @param {Array/NodeList} array The Array of items to pluck the value from.
         * @param {String} propertyName The property name to pluck from each element.
         * @return {Array} The value from each item in the Array.
         */
        pluck: function(array, propertyName) {
            var ret = [],
                i, ln, item;

            for (i = 0, ln = array.length; i < ln; i++) {
                item = array[i];

                ret.push(item[propertyName]);
            }

            return ret;
        },

        /**
         * Creates a new array with the results of calling a provided function on every element in this array.
         *
         * @param {Array} array
         * @param {Function} fn Callback function for each item
         * @param {Object} scope Callback function scope
         * @return {Array} results
         */
        map: function(array, fn, scope) {
            if (supportsMap) {
                return array.map(fn, scope);
            }

            var results = [],
                i = 0,
                len = array.length;

            for (; i < len; i++) {
                results[i] = fn.call(scope, array[i], i, array);
            }

            return results;
        },

        /**
         * Executes the specified function for each array element until the function returns a falsy value.
         * If such an item is found, the function will return false immediately.
         * Otherwise, it will return true.
         *
         * @param {Array} array
         * @param {Function} fn Callback function for each item
         * @param {Object} scope Callback function scope
         * @return {Boolean} True if no false value is returned by the callback function.
         */
        every: function(array, fn, scope) {
            if (supportsEvery) {
                return array.every(fn, scope);
            }

            var i = 0,
                ln = array.length;

            for (; i < ln; ++i) {
                if (!fn.call(scope, array[i], i, array)) {
                    return false;
                }
            }

            return true;
        },

        /**
         * Executes the specified function for each array element until the function returns a truthy value.
         * If such an item is found, the function will return true immediately. Otherwise, it will return false.
         *
         * @param {Array} array
         * @param {Function} fn Callback function for each item
         * @param {Object} scope Callback function scope
         * @return {Boolean} True if the callback function returns a truthy value.
         */
        some: function(array, fn, scope) {
            if (supportsSome) {
                return array.some(fn, scope);
            }

            var i = 0,
                ln = array.length;

            for (; i < ln; ++i) {
                if (fn.call(scope, array[i], i, array)) {
                    return true;
                }
            }

            return false;
        },

        /**
         * Filter through an array and remove empty item as defined in {@link Ext#isEmpty Ext.isEmpty}
         *
         * See {@link Ext.Array#filter}
         *
         * @param {Array} array
         * @return {Array} results
         */
        clean: function(array) {
            var results = [],
                i = 0,
                ln = array.length,
                item;

            for (; i < ln; i++) {
                item = array[i];

                if (!Ext.isEmpty(item)) {
                    results.push(item);
                }
            }

            return results;
        },

        /**
         * Returns a new array with unique items
         *
         * @param {Array} array
         * @return {Array} results
         */
        unique: function(array) {
            var clone = [],
                i = 0,
                ln = array.length,
                item;

            for (; i < ln; i++) {
                item = array[i];

                if (ExtArray.indexOf(clone, item) === -1) {
                    clone.push(item);
                }
            }

            return clone;
        },

        /**
         * Creates a new array with all of the elements of this array for which
         * the provided filtering function returns true.
         *
         * @param {Array} array
         * @param {Function} fn Callback function for each item
         * @param {Object} scope Callback function scope
         * @return {Array} results
         */
        filter: function(array, fn, scope) {
            if (supportsFilter) {
                return array.filter(fn, scope);
            }

            var results = [],
                i = 0,
                ln = array.length;

            for (; i < ln; i++) {
                if (fn.call(scope, array[i], i, array)) {
                    results.push(array[i]);
                }
            }

            return results;
        },

        /**
         * Converts a value to an array if it's not already an array; returns:
         *
         * - An empty array if given value is `undefined` or `null`
         * - Itself if given value is already an array
         * - An array copy if given value is {@link Ext#isIterable iterable} (arguments, NodeList and alike)
         * - An array with one item which is the given value, otherwise
         *
         * @param {Object} value The value to convert to an array if it's not already is an array
         * @param {Boolean} newReference (Optional) True to clone the given array and return a new reference if necessary,
         * defaults to false
         * @return {Array} array
         */
        from: function(value, newReference) {
            if (value === undefined || value === null) {
                return [];
            }

            if (Ext.isArray(value)) {
                return (newReference) ? slice.call(value) : value;
            }

            if (value && value.length !== undefined && typeof value !== 'string') {
                return Ext.toArray(value);
            }

            return [value];
        },

        /**
         * Removes the specified item from the array if it exists
         *
         * @param {Array} array The array
         * @param {Object} item The item to remove
         * @return {Array} The passed array itself
         */
        remove: function(array, item) {
            var index = ExtArray.indexOf(array, item);

            if (index !== -1) {
                erase(array, index, 1);
            }

            return array;
        },

        /**
         * Push an item into the array only if the array doesn't contain it yet
         *
         * @param {Array} array The array
         * @param {Object} item The item to include
         */
        include: function(array, item) {
            if (!ExtArray.contains(array, item)) {
                array.push(item);
            }
        },

        /**
         * Clone a flat array without referencing the previous one. Note that this is different
         * from Ext.clone since it doesn't handle recursive cloning. It's simply a convenient, easy-to-remember method
         * for Array.prototype.slice.call(array)
         *
         * @param {Array} array The array
         * @return {Array} The clone array
         */
        clone: function(array) {
            return slice.call(array);
        },

        /**
         * Merge multiple arrays into one with unique items.
         *
         * {@link Ext.Array#union} is alias for {@link Ext.Array#merge}
         *
         * @param {Array} array1
         * @param {Array} array2
         * @param {Array} etc
         * @return {Array} merged
         */
        merge: function() {
            var args = slice.call(arguments),
                array = [],
                i, ln;

            for (i = 0, ln = args.length; i < ln; i++) {
                array = array.concat(args[i]);
            }

            return ExtArray.unique(array);
        },

        /**
         * Merge multiple arrays into one with unique items that exist in all of the arrays.
         *
         * @param {Array} array1
         * @param {Array} array2
         * @param {Array} etc
         * @return {Array} intersect
         */
        intersect: function() {
            var intersect = [],
                arrays = slice.call(arguments),
                i, j, k, minArray, array, x, y, ln, arraysLn, arrayLn;

            if (!arrays.length) {
                return intersect;
            }

            // Find the smallest array
            for (i = x = 0,ln = arrays.length; i < ln,array = arrays[i]; i++) {
                if (!minArray || array.length < minArray.length) {
                    minArray = array;
                    x = i;
                }
            }

            minArray = ExtArray.unique(minArray);
            erase(arrays, x, 1);

            // Use the smallest unique'd array as the anchor loop. If the other array(s) do contain
            // an item in the small array, we're likely to find it before reaching the end
            // of the inner loop and can terminate the search early.
            for (i = 0,ln = minArray.length; i < ln,x = minArray[i]; i++) {
                var count = 0;

                for (j = 0,arraysLn = arrays.length; j < arraysLn,array = arrays[j]; j++) {
                    for (k = 0,arrayLn = array.length; k < arrayLn,y = array[k]; k++) {
                        if (x === y) {
                            count++;
                            break;
                        }
                    }
                }

                if (count === arraysLn) {
                    intersect.push(x);
                }
            }

            return intersect;
        },

        /**
         * Perform a set difference A-B by subtracting all items in array B from array A.
         *
         * @param {Array} arrayA
         * @param {Array} arrayB
         * @return {Array} difference
         */
        difference: function(arrayA, arrayB) {
            var clone = slice.call(arrayA),
                ln = clone.length,
                i, j, lnB;

            for (i = 0,lnB = arrayB.length; i < lnB; i++) {
                for (j = 0; j < ln; j++) {
                    if (clone[j] === arrayB[i]) {
                        erase(clone, j, 1);
                        j--;
                        ln--;
                    }
                }
            }

            return clone;
        },

        /**
         * Returns a shallow copy of a part of an array. This is equivalent to the native
         * call "Array.prototype.slice.call(array, begin, end)". This is often used when "array"
         * is "arguments" since the arguments object does not supply a slice method but can
         * be the context object to Array.prototype.slice.
         *
         * @param {Array} array The array (or arguments object).
         * @param {Number} begin The index at which to begin. Negative values are offsets from
         * the end of the array.
         * @param {Number} end The index at which to end. The copied items do not include
         * end. Negative values are offsets from the end of the array. If end is omitted,
         * all items up to the end of the array are copied.
         * @return {Array} The copied piece of the array.
         */
        // Note: IE6 will return [] on slice.call(x, undefined).
        slice: ([1,2].slice(1, undefined).length ?
            function (array, begin, end) {
                return slice.call(array, begin, end);
            } :
            // at least IE6 uses arguments.length for variadic signature
            function (array, begin, end) {
                // After tested for IE 6, the one below is of the best performance
                // see http://jsperf.com/slice-fix
                if (typeof begin === 'undefined') {
                    return slice.call(array);
                }
                if (typeof end === 'undefined') {
                    return slice.call(array, begin);
                }
                return slice.call(array, begin, end);
            }
        ),

        /**
         * Sorts the elements of an Array.
         * By default, this method sorts the elements alphabetically and ascending.
         *
         * @param {Array} array The array to sort.
         * @param {Function} sortFn (optional) The comparison function.
         * @return {Array} The sorted array.
         */
        sort: function(array, sortFn) {
            if (supportsSort) {
                if (sortFn) {
                    return array.sort(sortFn);
                } else {
                    return array.sort();
                }
            }

            var length = array.length,
                i = 0,
                comparison,
                j, min, tmp;

            for (; i < length; i++) {
                min = i;
                for (j = i + 1; j < length; j++) {
                    if (sortFn) {
                        comparison = sortFn(array[j], array[min]);
                        if (comparison < 0) {
                            min = j;
                        }
                    } else if (array[j] < array[min]) {
                        min = j;
                    }
                }
                if (min !== i) {
                    tmp = array[i];
                    array[i] = array[min];
                    array[min] = tmp;
                }
            }

            return array;
        },

        /**
         * Recursively flattens into 1-d Array. Injects Arrays inline.
         *
         * @param {Array} array The array to flatten
         * @return {Array} The 1-d array.
         */
        flatten: function(array) {
            var worker = [];

            function rFlatten(a) {
                var i, ln, v;

                for (i = 0, ln = a.length; i < ln; i++) {
                    v = a[i];

                    if (Ext.isArray(v)) {
                        rFlatten(v);
                    } else {
                        worker.push(v);
                    }
                }

                return worker;
            }

            return rFlatten(array);
        },

        /**
         * Returns the minimum value in the Array.
         *
         * @param {Array/NodeList} array The Array from which to select the minimum value.
         * @param {Function} comparisonFn (optional) a function to perform the comparision which determines minimization.
         * If omitted the "<" operator will be used. Note: gt = 1; eq = 0; lt = -1
         * @return {Object} minValue The minimum value
         */
        min: function(array, comparisonFn) {
            var min = array[0],
                i, ln, item;

            for (i = 0, ln = array.length; i < ln; i++) {
                item = array[i];

                if (comparisonFn) {
                    if (comparisonFn(min, item) === 1) {
                        min = item;
                    }
                }
                else {
                    if (item < min) {
                        min = item;
                    }
                }
            }

            return min;
        },

        /**
         * Returns the maximum value in the Array.
         *
         * @param {Array/NodeList} array The Array from which to select the maximum value.
         * @param {Function} comparisonFn (optional) a function to perform the comparision which determines maximization.
         * If omitted the ">" operator will be used. Note: gt = 1; eq = 0; lt = -1
         * @return {Object} maxValue The maximum value
         */
        max: function(array, comparisonFn) {
            var max = array[0],
                i, ln, item;

            for (i = 0, ln = array.length; i < ln; i++) {
                item = array[i];

                if (comparisonFn) {
                    if (comparisonFn(max, item) === -1) {
                        max = item;
                    }
                }
                else {
                    if (item > max) {
                        max = item;
                    }
                }
            }

            return max;
        },

        /**
         * Calculates the mean of all items in the array.
         *
         * @param {Array} array The Array to calculate the mean value of.
         * @return {Number} The mean.
         */
        mean: function(array) {
            return array.length > 0 ? ExtArray.sum(array) / array.length : undefined;
        },

        /**
         * Calculates the sum of all items in the given array.
         *
         * @param {Array} array The Array to calculate the sum value of.
         * @return {Number} The sum.
         */
        sum: function(array) {
            var sum = 0,
                i, ln, item;

            for (i = 0,ln = array.length; i < ln; i++) {
                item = array[i];

                sum += item;
            }

            return sum;
        },


        /**
         * Removes items from an array. This is functionally equivalent to the splice method
         * of Array, but works around bugs in IE8's splice method and does not copy the
         * removed elements in order to return them (because very often they are ignored).
         *
         * @param {Array} array The Array on which to replace.
         * @param {Number} index The index in the array at which to operate.
         * @param {Number} removeCount The number of items to remove at index.
         * @return {Array} The array passed.
         * @method
         */
        erase: erase,

        /**
         * Inserts items in to an array.
         *
         * @param {Array} array The Array on which to replace.
         * @param {Number} index The index in the array at which to operate.
         * @param {Array} items The array of items to insert at index.
         * @return {Array} The array passed.
         */
        insert: function (array, index, items) {
            return replace(array, index, 0, items);
        },

        /**
         * Replaces items in an array. This is functionally equivalent to the splice method
         * of Array, but works around bugs in IE8's splice method and is often more convenient
         * to call because it accepts an array of items to insert rather than use a variadic
         * argument list.
         *
         * @param {Array} array The Array on which to replace.
         * @param {Number} index The index in the array at which to operate.
         * @param {Number} removeCount The number of items to remove at index (can be 0).
         * @param {Array} insert (optional) An array of items to insert at index.
         * @return {Array} The array passed.
         * @method
         */
        replace: replace,

        /**
         * Replaces items in an array. This is equivalent to the splice method of Array, but
         * works around bugs in IE8's splice method. The signature is exactly the same as the
         * splice method except that the array is the first argument. All arguments following
         * removeCount are inserted in the array at index.
         *
         * @param {Array} array The Array on which to replace.
         * @param {Number} index The index in the array at which to operate.
         * @param {Number} removeCount The number of items to remove at index (can be 0).
         * @return {Array} An array containing the removed items.
         * @method
         */
        splice: splice
    };

    /**
     * @method
     * @member Ext
     * @alias Ext.Array#each
     */
    Ext.each = ExtArray.each;

    /**
     * @method
     * @member Ext.Array
     * @alias Ext.Array#merge
     */
    ExtArray.union = ExtArray.merge;

    /**
     * Old alias to {@link Ext.Array#min}
     * @deprecated 4.0.0 Use {@link Ext.Array#min} instead
     * @method
     * @member Ext
     * @alias Ext.Array#min
     */
    Ext.min = ExtArray.min;

    /**
     * Old alias to {@link Ext.Array#max}
     * @deprecated 4.0.0 Use {@link Ext.Array#max} instead
     * @method
     * @member Ext
     * @alias Ext.Array#max
     */
    Ext.max = ExtArray.max;

    /**
     * Old alias to {@link Ext.Array#sum}
     * @deprecated 4.0.0 Use {@link Ext.Array#sum} instead
     * @method
     * @member Ext
     * @alias Ext.Array#sum
     */
    Ext.sum = ExtArray.sum;

    /**
     * Old alias to {@link Ext.Array#mean}
     * @deprecated 4.0.0 Use {@link Ext.Array#mean} instead
     * @method
     * @member Ext
     * @alias Ext.Array#mean
     */
    Ext.mean = ExtArray.mean;

    /**
     * Old alias to {@link Ext.Array#flatten}
     * @deprecated 4.0.0 Use {@link Ext.Array#flatten} instead
     * @method
     * @member Ext
     * @alias Ext.Array#flatten
     */
    Ext.flatten = ExtArray.flatten;

    /**
     * Old alias to {@link Ext.Array#clean}
     * @deprecated 4.0.0 Use {@link Ext.Array#clean} instead
     * @method
     * @member Ext
     * @alias Ext.Array#clean
     */
    Ext.clean = ExtArray.clean;

    /**
     * Old alias to {@link Ext.Array#unique}
     * @deprecated 4.0.0 Use {@link Ext.Array#unique} instead
     * @method
     * @member Ext
     * @alias Ext.Array#unique
     */
    Ext.unique = ExtArray.unique;

    /**
     * Old alias to {@link Ext.Array#pluck Ext.Array.pluck}
     * @deprecated 4.0.0 Use {@link Ext.Array#pluck Ext.Array.pluck} instead
     * @method
     * @member Ext
     * @alias Ext.Array#pluck
     */
    Ext.pluck = ExtArray.pluck;

    /**
     * @method
     * @member Ext
     * @alias Ext.Array#toArray
     */
    Ext.toArray = function() {
        return ExtArray.toArray.apply(ExtArray, arguments);
    };
})();

/**
 * @class Ext.Function
 *
 * A collection of useful static methods to deal with function callbacks
 * @singleton
 */
Ext.Function = {

    /**
     * A very commonly used method throughout the framework. It acts as a wrapper around another method
     * which originally accepts 2 arguments for `name` and `value`.
     * The wrapped function then allows "flexible" value setting of either:
     *
     * - `name` and `value` as 2 arguments
     * - one single object argument with multiple key - value pairs
     *
     * For example:
     *
     *     var setValue = Ext.Function.flexSetter(function(name, value) {
     *         this[name] = value;
     *     });
     *
     *     // Afterwards
     *     // Setting a single name - value
     *     setValue('name1', 'value1');
     *
     *     // Settings multiple name - value pairs
     *     setValue({
     *         name1: 'value1',
     *         name2: 'value2',
     *         name3: 'value3'
     *     });
     *
     * @param {Function} setter
     * @returns {Function} flexSetter
     */
    flexSetter: function(fn) {
        return function(a, b) {
            var k, i;

            if (a === null) {
                return this;
            }

            if (typeof a !== 'string') {
                for (k in a) {
                    if (a.hasOwnProperty(k)) {
                        fn.call(this, k, a[k]);
                    }
                }

                if (Ext.enumerables) {
                    for (i = Ext.enumerables.length; i--;) {
                        k = Ext.enumerables[i];
                        if (a.hasOwnProperty(k)) {
                            fn.call(this, k, a[k]);
                        }
                    }
                }
            } else {
                fn.call(this, a, b);
            }

            return this;
        };
    },

    /**
     * Create a new function from the provided `fn`, change `this` to the provided scope, optionally
     * overrides arguments for the call. (Defaults to the arguments passed by the caller)
     *
     * {@link Ext#bind Ext.bind} is alias for {@link Ext.Function#bind Ext.Function.bind}
     *
     * @param {Function} fn The function to delegate.
     * @param {Object} scope (optional) The scope (`this` reference) in which the function is executed.
     * **If omitted, defaults to the browser window.**
     * @param {Array} args (optional) Overrides arguments for the call. (Defaults to the arguments passed by the caller)
     * @param {Boolean/Number} appendArgs (optional) if True args are appended to call args instead of overriding,
     * if a number the args are inserted at the specified position
     * @return {Function} The new function
     */
    bind: function(fn, scope, args, appendArgs) {
        if (arguments.length === 2) {
            return function() {
                return fn.apply(scope, arguments);
            }
        }

        var method = fn,
            slice = Array.prototype.slice;

        return function() {
            var callArgs = args || arguments;

            if (appendArgs === true) {
                callArgs = slice.call(arguments, 0);
                callArgs = callArgs.concat(args);
            }
            else if (typeof appendArgs == 'number') {
                callArgs = slice.call(arguments, 0); // copy arguments first
                Ext.Array.insert(callArgs, appendArgs, args);
            }

            return method.apply(scope || window, callArgs);
        };
    },

    /**
     * Create a new function from the provided `fn`, the arguments of which are pre-set to `args`.
     * New arguments passed to the newly created callback when it's invoked are appended after the pre-set ones.
     * This is especially useful when creating callbacks.
     *
     * For example:
     *
     *     var originalFunction = function(){
     *         alert(Ext.Array.from(arguments).join(' '));
     *     };
     *
     *     var callback = Ext.Function.pass(originalFunction, ['Hello', 'World']);
     *
     *     callback(); // alerts 'Hello World'
     *     callback('by Me'); // alerts 'Hello World by Me'
     *
     * {@link Ext#pass Ext.pass} is alias for {@link Ext.Function#pass Ext.Function.pass}
     *
     * @param {Function} fn The original function
     * @param {Array} args The arguments to pass to new callback
     * @param {Object} scope (optional) The scope (`this` reference) in which the function is executed.
     * @return {Function} The new callback function
     */
    pass: function(fn, args, scope) {
        if (args) {
            args = Ext.Array.from(args);
        }

        return function() {
            return fn.apply(scope, args.concat(Ext.Array.toArray(arguments)));
        };
    },

    /**
     * Create an alias to the provided method property with name `methodName` of `object`.
     * Note that the execution scope will still be bound to the provided `object` itself.
     *
     * @param {Object/Function} object
     * @param {String} methodName
     * @return {Function} aliasFn
     */
    alias: function(object, methodName) {
        return function() {
            return object[methodName].apply(object, arguments);
        };
    },

    /**
     * Creates an interceptor function. The passed function is called before the original one. If it returns false,
     * the original one is not called. The resulting function returns the results of the original function.
     * The passed function is called with the parameters of the original function. Example usage:
     *
     *     var sayHi = function(name){
     *         alert('Hi, ' + name);
     *     }
     *
     *     sayHi('Fred'); // alerts "Hi, Fred"
     *
     *     // create a new function that validates input without
     *     // directly modifying the original function:
     *     var sayHiToFriend = Ext.Function.createInterceptor(sayHi, function(name){
     *         return name == 'Brian';
     *     });
     *
     *     sayHiToFriend('Fred');  // no alert
     *     sayHiToFriend('Brian'); // alerts "Hi, Brian"
     *
     * @param {Function} origFn The original function.
     * @param {Function} newFn The function to call before the original
     * @param {Object} scope (optional) The scope (`this` reference) in which the passed function is executed.
     * **If omitted, defaults to the scope in which the original function is called or the browser window.**
     * @param {Object} returnValue (optional) The value to return if the passed function return false (defaults to null).
     * @return {Function} The new function
     */
    createInterceptor: function(origFn, newFn, scope, returnValue) {
        var method = origFn;
        if (!Ext.isFunction(newFn)) {
            return origFn;
        }
        else {
            return function() {
                var me = this,
                    args = arguments;
                newFn.target = me;
                newFn.method = origFn;
                return (newFn.apply(scope || me || window, args) !== false) ? origFn.apply(me || window, args) : returnValue || null;
            };
        }
    },

    /**
     * Creates a delegate (callback) which, when called, executes after a specific delay.
     *
     * @param {Function} fn The function which will be called on a delay when the returned function is called.
     * Optionally, a replacement (or additional) argument list may be specified.
     * @param {Number} delay The number of milliseconds to defer execution by whenever called.
     * @param {Object} scope (optional) The scope (`this` reference) used by the function at execution time.
     * @param {Array} args (optional) Override arguments for the call. (Defaults to the arguments passed by the caller)
     * @param {Boolean/Number} appendArgs (optional) if True args are appended to call args instead of overriding,
     * if a number the args are inserted at the specified position.
     * @return {Function} A function which, when called, executes the original function after the specified delay.
     */
    createDelayed: function(fn, delay, scope, args, appendArgs) {
        if (scope || args) {
            fn = Ext.Function.bind(fn, scope, args, appendArgs);
        }
        return function() {
            var me = this;
            setTimeout(function() {
                fn.apply(me, arguments);
            }, delay);
        };
    },

    /**
     * Calls this function after the number of millseconds specified, optionally in a specific scope. Example usage:
     *
     *     var sayHi = function(name){
     *         alert('Hi, ' + name);
     *     }
     *
     *     // executes immediately:
     *     sayHi('Fred');
     *
     *     // executes after 2 seconds:
     *     Ext.Function.defer(sayHi, 2000, this, ['Fred']);
     *
     *     // this syntax is sometimes useful for deferring
     *     // execution of an anonymous function:
     *     Ext.Function.defer(function(){
     *         alert('Anonymous');
     *     }, 100);
     *
     * {@link Ext#defer Ext.defer} is alias for {@link Ext.Function#defer Ext.Function.defer}
     *
     * @param {Function} fn The function to defer.
     * @param {Number} millis The number of milliseconds for the setTimeout call
     * (if less than or equal to 0 the function is executed immediately)
     * @param {Object} scope (optional) The scope (`this` reference) in which the function is executed.
     * **If omitted, defaults to the browser window.**
     * @param {Array} args (optional) Overrides arguments for the call. (Defaults to the arguments passed by the caller)
     * @param {Boolean/Number} appendArgs (optional) if True args are appended to call args instead of overriding,
     * if a number the args are inserted at the specified position
     * @return {Number} The timeout id that can be used with clearTimeout
     */
    defer: function(fn, millis, obj, args, appendArgs) {
        fn = Ext.Function.bind(fn, obj, args, appendArgs);
        if (millis > 0) {
            return setTimeout(fn, millis);
        }
        fn();
        return 0;
    },

    /**
     * Create a combined function call sequence of the original function + the passed function.
     * The resulting function returns the results of the original function.
     * The passed function is called with the parameters of the original function. Example usage:
     *
     *     var sayHi = function(name){
     *         alert('Hi, ' + name);
     *     }
     *
     *     sayHi('Fred'); // alerts "Hi, Fred"
     *
     *     var sayGoodbye = Ext.Function.createSequence(sayHi, function(name){
     *         alert('Bye, ' + name);
     *     });
     *
     *     sayGoodbye('Fred'); // both alerts show
     *
     * @param {Function} origFn The original function.
     * @param {Function} newFn The function to sequence
     * @param {Object} scope (optional) The scope (`this` reference) in which the passed function is executed.
     * If omitted, defaults to the scope in which the original function is called or the browser window.
     * @return {Function} The new function
     */
    createSequence: function(origFn, newFn, scope) {
        if (!Ext.isFunction(newFn)) {
            return origFn;
        }
        else {
            return function() {
                var retval = origFn.apply(this || window, arguments);
                newFn.apply(scope || this || window, arguments);
                return retval;
            };
        }
    },

    /**
     * Creates a delegate function, optionally with a bound scope which, when called, buffers
     * the execution of the passed function for the configured number of milliseconds.
     * If called again within that period, the impending invocation will be canceled, and the
     * timeout period will begin again.
     *
     * @param {Function} fn The function to invoke on a buffered timer.
     * @param {Number} buffer The number of milliseconds by which to buffer the invocation of the
     * function.
     * @param {Object} scope (optional) The scope (`this` reference) in which
     * the passed function is executed. If omitted, defaults to the scope specified by the caller.
     * @param {Array} args (optional) Override arguments for the call. Defaults to the arguments
     * passed by the caller.
     * @return {Function} A function which invokes the passed function after buffering for the specified time.
     */
    createBuffered: function(fn, buffer, scope, args) {
        return function(){
            var timerId;
            return function() {
                var me = this;
                if (timerId) {
                    clearTimeout(timerId);
                    timerId = null;
                }
                timerId = setTimeout(function(){
                    fn.apply(scope || me, args || arguments);
                }, buffer);
            };
        }();
    },

    /**
     * Creates a throttled version of the passed function which, when called repeatedly and
     * rapidly, invokes the passed function only after a certain interval has elapsed since the
     * previous invocation.
     *
     * This is useful for wrapping functions which may be called repeatedly, such as
     * a handler of a mouse move event when the processing is expensive.
     *
     * @param {Function} fn The function to execute at a regular time interval.
     * @param {Number} interval The interval **in milliseconds** on which the passed function is executed.
     * @param {Object} scope (optional) The scope (`this` reference) in which
     * the passed function is executed. If omitted, defaults to the scope specified by the caller.
     * @returns {Function} A function which invokes the passed function at the specified interval.
     */
    createThrottled: function(fn, interval, scope) {
        var lastCallTime, elapsed, lastArgs, timer, execute = function() {
            fn.apply(scope || this, lastArgs);
            lastCallTime = new Date().getTime();
        };

        return function() {
            elapsed = new Date().getTime() - lastCallTime;
            lastArgs = arguments;

            clearTimeout(timer);
            if (!lastCallTime || (elapsed >= interval)) {
                execute();
            } else {
                timer = setTimeout(execute, interval - elapsed);
            }
        };
    },

    /**
     * Adds behavior to an existing method that is executed before the
     * original behavior of the function.  For example:
     * 
     *     var soup = {
     *         contents: [],
     *         add: function(ingredient) {
     *             this.contents.push(ingredient);
     *         }
     *     };
     *     Ext.Function.interceptBefore(soup, "add", function(ingredient){
     *         if (!this.contents.length && ingredient !== "water") {
     *             // Always add water to start with
     *             this.contents.push("water");
     *         }
     *     });
     *     soup.add("onions");
     *     soup.add("salt");
     *     soup.contents; // will contain: water, onions, salt
     * 
     * @param {Object} object The target object
     * @param {String} methodName Name of the method to override
     * @param {Function} fn Function with the new behavior.  It will
     * be called with the same arguments as the original method.  The
     * return value of this function will be the return value of the
     * new method.
     * @return {Function} The new function just created.
     */
    interceptBefore: function(object, methodName, fn) {
        var method = object[methodName] || Ext.emptyFn;

        return object[methodName] = function() {
            var ret = fn.apply(this, arguments);
            method.apply(this, arguments);

            return ret;
        };
    },

    /**
     * Adds behavior to an existing method that is executed after the
     * original behavior of the function.  For example:
     * 
     *     var soup = {
     *         contents: [],
     *         add: function(ingredient) {
     *             this.contents.push(ingredient);
     *         }
     *     };
     *     Ext.Function.interceptAfter(soup, "add", function(ingredient){
     *         // Always add a bit of extra salt
     *         this.contents.push("salt");
     *     });
     *     soup.add("water");
     *     soup.add("onions");
     *     soup.contents; // will contain: water, salt, onions, salt
     * 
     * @param {Object} object The target object
     * @param {String} methodName Name of the method to override
     * @param {Function} fn Function with the new behavior.  It will
     * be called with the same arguments as the original method.  The
     * return value of this function will be the return value of the
     * new method.
     * @return {Function} The new function just created.
     */
    interceptAfter: function(object, methodName, fn) {
        var method = object[methodName] || Ext.emptyFn;

        return object[methodName] = function() {
            method.apply(this, arguments);
            return fn.apply(this, arguments);
        };
    }
};

/**
 * @method
 * @member Ext
 * @alias Ext.Function#defer
 */
Ext.defer = Ext.Function.alias(Ext.Function, 'defer');

/**
 * @method
 * @member Ext
 * @alias Ext.Function#pass
 */
Ext.pass = Ext.Function.alias(Ext.Function, 'pass');

/**
 * @method
 * @member Ext
 * @alias Ext.Function#bind
 */
Ext.bind = Ext.Function.alias(Ext.Function, 'bind');

/**
 * @author Jacky Nguyen <jacky@sencha.com>
 * @docauthor Jacky Nguyen <jacky@sencha.com>
 * @class Ext.Object
 *
 * A collection of useful static methods to deal with objects.
 *
 * @singleton
 */

(function() {

var ExtObject = Ext.Object = {

    /**
     * Converts a `name` - `value` pair to an array of objects with support for nested structures. Useful to construct
     * query strings. For example:
     *
     *     var objects = Ext.Object.toQueryObjects('hobbies', ['reading', 'cooking', 'swimming']);
     *
     *     // objects then equals:
     *     [
     *         { name: 'hobbies', value: 'reading' },
     *         { name: 'hobbies', value: 'cooking' },
     *         { name: 'hobbies', value: 'swimming' },
     *     ];
     *
     *     var objects = Ext.Object.toQueryObjects('dateOfBirth', {
     *         day: 3,
     *         month: 8,
     *         year: 1987,
     *         extra: {
     *             hour: 4
     *             minute: 30
     *         }
     *     }, true); // Recursive
     *
     *     // objects then equals:
     *     [
     *         { name: 'dateOfBirth[day]', value: 3 },
     *         { name: 'dateOfBirth[month]', value: 8 },
     *         { name: 'dateOfBirth[year]', value: 1987 },
     *         { name: 'dateOfBirth[extra][hour]', value: 4 },
     *         { name: 'dateOfBirth[extra][minute]', value: 30 },
     *     ];
     *
     * @param {String} name
     * @param {Object/Array} value
     * @param {Boolean} [recursive=false] True to traverse object recursively
     * @return {Array}
     */
    toQueryObjects: function(name, value, recursive) {
        var self = ExtObject.toQueryObjects,
            objects = [],
            i, ln;

        if (Ext.isArray(value)) {
            for (i = 0, ln = value.length; i < ln; i++) {
                if (recursive) {
                    objects = objects.concat(self(name + '[' + i + ']', value[i], true));
                }
                else {
                    objects.push({
                        name: name,
                        value: value[i]
                    });
                }
            }
        }
        else if (Ext.isObject(value)) {
            for (i in value) {
                if (value.hasOwnProperty(i)) {
                    if (recursive) {
                        objects = objects.concat(self(name + '[' + i + ']', value[i], true));
                    }
                    else {
                        objects.push({
                            name: name,
                            value: value[i]
                        });
                    }
                }
            }
        }
        else {
            objects.push({
                name: name,
                value: value
            });
        }

        return objects;
    },

    /**
     * Takes an object and converts it to an encoded query string.
     *
     * Non-recursive:
     *
     *     Ext.Object.toQueryString({foo: 1, bar: 2}); // returns "foo=1&bar=2"
     *     Ext.Object.toQueryString({foo: null, bar: 2}); // returns "foo=&bar=2"
     *     Ext.Object.toQueryString({'some price': '$300'}); // returns "some%20price=%24300"
     *     Ext.Object.toQueryString({date: new Date(2011, 0, 1)}); // returns "date=%222011-01-01T00%3A00%3A00%22"
     *     Ext.Object.toQueryString({colors: ['red', 'green', 'blue']}); // returns "colors=red&colors=green&colors=blue"
     *
     * Recursive:
     *
     *     Ext.Object.toQueryString({
     *         username: 'Jacky',
     *         dateOfBirth: {
     *             day: 1,
     *             month: 2,
     *             year: 1911
     *         },
     *         hobbies: ['coding', 'eating', 'sleeping', ['nested', 'stuff']]
     *     }, true); // returns the following string (broken down and url-decoded for ease of reading purpose):
     *     // username=Jacky
     *     //    &dateOfBirth[day]=1&dateOfBirth[month]=2&dateOfBirth[year]=1911
     *     //    &hobbies[0]=coding&hobbies[1]=eating&hobbies[2]=sleeping&hobbies[3][0]=nested&hobbies[3][1]=stuff
     *
     * @param {Object} object The object to encode
     * @param {Boolean} [recursive=false] Whether or not to interpret the object in recursive format.
     * (PHP / Ruby on Rails servers and similar).
     * @return {String} queryString
     */
    toQueryString: function(object, recursive) {
        var paramObjects = [],
            params = [],
            i, j, ln, paramObject, value;

        for (i in object) {
            if (object.hasOwnProperty(i)) {
                paramObjects = paramObjects.concat(ExtObject.toQueryObjects(i, object[i], recursive));
            }
        }

        for (j = 0, ln = paramObjects.length; j < ln; j++) {
            paramObject = paramObjects[j];
            value = paramObject.value;

            if (Ext.isEmpty(value)) {
                value = '';
            }
            else if (Ext.isDate(value)) {
                value = Ext.Date.toString(value);
            }

            params.push(encodeURIComponent(paramObject.name) + '=' + encodeURIComponent(String(value)));
        }

        return params.join('&');
    },

    /**
     * Converts a query string back into an object.
     *
     * Non-recursive:
     *
     *     Ext.Object.fromQueryString(foo=1&bar=2); // returns {foo: 1, bar: 2}
     *     Ext.Object.fromQueryString(foo=&bar=2); // returns {foo: null, bar: 2}
     *     Ext.Object.fromQueryString(some%20price=%24300); // returns {'some price': '$300'}
     *     Ext.Object.fromQueryString(colors=red&colors=green&colors=blue); // returns {colors: ['red', 'green', 'blue']}
     *
     * Recursive:
     *
     *       Ext.Object.fromQueryString("username=Jacky&dateOfBirth[day]=1&dateOfBirth[month]=2&dateOfBirth[year]=1911&hobbies[0]=coding&hobbies[1]=eating&hobbies[2]=sleeping&hobbies[3][0]=nested&hobbies[3][1]=stuff", true);
     *     // returns
     *     {
     *         username: 'Jacky',
     *         dateOfBirth: {
     *             day: '1',
     *             month: '2',
     *             year: '1911'
     *         },
     *         hobbies: ['coding', 'eating', 'sleeping', ['nested', 'stuff']]
     *     }
     *
     * @param {String} queryString The query string to decode
     * @param {Boolean} [recursive=false] Whether or not to recursively decode the string. This format is supported by
     * PHP / Ruby on Rails servers and similar.
     * @return {Object}
     */
    fromQueryString: function(queryString, recursive) {
        var parts = queryString.replace(/^\?/, '').split('&'),
            object = {},
            temp, components, name, value, i, ln,
            part, j, subLn, matchedKeys, matchedName,
            keys, key, nextKey;

        for (i = 0, ln = parts.length; i < ln; i++) {
            part = parts[i];

            if (part.length > 0) {
                components = part.split('=');
                name = decodeURIComponent(components[0]);
                value = (components[1] !== undefined) ? decodeURIComponent(components[1]) : '';

                if (!recursive) {
                    if (object.hasOwnProperty(name)) {
                        if (!Ext.isArray(object[name])) {
                            object[name] = [object[name]];
                        }

                        object[name].push(value);
                    }
                    else {
                        object[name] = value;
                    }
                }
                else {
                    matchedKeys = name.match(/(\[):?([^\]]*)\]/g);
                    matchedName = name.match(/^([^\[]+)/);


                    name = matchedName[0];
                    keys = [];

                    if (matchedKeys === null) {
                        object[name] = value;
                        continue;
                    }

                    for (j = 0, subLn = matchedKeys.length; j < subLn; j++) {
                        key = matchedKeys[j];
                        key = (key.length === 2) ? '' : key.substring(1, key.length - 1);
                        keys.push(key);
                    }

                    keys.unshift(name);

                    temp = object;

                    for (j = 0, subLn = keys.length; j < subLn; j++) {
                        key = keys[j];

                        if (j === subLn - 1) {
                            if (Ext.isArray(temp) && key === '') {
                                temp.push(value);
                            }
                            else {
                                temp[key] = value;
                            }
                        }
                        else {
                            if (temp[key] === undefined || typeof temp[key] === 'string') {
                                nextKey = keys[j+1];

                                temp[key] = (Ext.isNumeric(nextKey) || nextKey === '') ? [] : {};
                            }

                            temp = temp[key];
                        }
                    }
                }
            }
        }

        return object;
    },

    /**
     * Iterates through an object and invokes the given callback function for each iteration.
     * The iteration can be stopped by returning `false` in the callback function. For example:
     *
     *     var person = {
     *         name: 'Jacky'
     *         hairColor: 'black'
     *         loves: ['food', 'sleeping', 'wife']
     *     };
     *
     *     Ext.Object.each(person, function(key, value, myself) {
     *         console.log(key + ":" + value);
     *
     *         if (key === 'hairColor') {
     *             return false; // stop the iteration
     *         }
     *     });
     *
     * @param {Object} object The object to iterate
     * @param {Function} fn The callback function.
     * @param {String} fn.key
     * @param {Object} fn.value
     * @param {Object} fn.object The object itself
     * @param {Object} [scope] The execution scope (`this`) of the callback function
     */
    each: function(object, fn, scope) {
        for (var property in object) {
            if (object.hasOwnProperty(property)) {
                if (fn.call(scope || object, property, object[property], object) === false) {
                    return;
                }
            }
        }
    },

    /**
     * Merges any number of objects recursively without referencing them or their children.
     *
     *     var extjs = {
     *         companyName: 'Ext JS',
     *         products: ['Ext JS', 'Ext GWT', 'Ext Designer'],
     *         isSuperCool: true
     *         office: {
     *             size: 2000,
     *             location: 'Palo Alto',
     *             isFun: true
     *         }
     *     };
     *
     *     var newStuff = {
     *         companyName: 'Sencha Inc.',
     *         products: ['Ext JS', 'Ext GWT', 'Ext Designer', 'Sencha Touch', 'Sencha Animator'],
     *         office: {
     *             size: 40000,
     *             location: 'Redwood City'
     *         }
     *     };
     *
     *     var sencha = Ext.Object.merge(extjs, newStuff);
     *
     *     // extjs and sencha then equals to
     *     {
     *         companyName: 'Sencha Inc.',
     *         products: ['Ext JS', 'Ext GWT', 'Ext Designer', 'Sencha Touch', 'Sencha Animator'],
     *         isSuperCool: true
     *         office: {
     *             size: 30000,
     *             location: 'Redwood City'
     *             isFun: true
     *         }
     *     }
     *
     * @param {Object...} object Any number of objects to merge.
     * @return {Object} merged The object that is created as a result of merging all the objects passed in.
     */
    merge: function(source, key, value) {
        if (typeof key === 'string') {
            if (value && value.constructor === Object) {
                if (source[key] && source[key].constructor === Object) {
                    ExtObject.merge(source[key], value);
                }
                else {
                    source[key] = Ext.clone(value);
                }
            }
            else {
                source[key] = value;
            }

            return source;
        }

        var i = 1,
            ln = arguments.length,
            object, property;

        for (; i < ln; i++) {
            object = arguments[i];

            for (property in object) {
                if (object.hasOwnProperty(property)) {
                    ExtObject.merge(source, property, object[property]);
                }
            }
        }

        return source;
    },

    /**
     * Returns the first matching key corresponding to the given value.
     * If no matching value is found, null is returned.
     *
     *     var person = {
     *         name: 'Jacky',
     *         loves: 'food'
     *     };
     *
     *     alert(Ext.Object.getKey(person, 'food')); // alerts 'loves'
     *
     * @param {Object} object
     * @param {Object} value The value to find
     */
    getKey: function(object, value) {
        for (var property in object) {
            if (object.hasOwnProperty(property) && object[property] === value) {
                return property;
            }
        }

        return null;
    },

    /**
     * Gets all values of the given object as an array.
     *
     *     var values = Ext.Object.getValues({
     *         name: 'Jacky',
     *         loves: 'food'
     *     }); // ['Jacky', 'food']
     *
     * @param {Object} object
     * @return {Array} An array of values from the object
     */
    getValues: function(object) {
        var values = [],
            property;

        for (property in object) {
            if (object.hasOwnProperty(property)) {
                values.push(object[property]);
            }
        }

        return values;
    },

    /**
     * Gets all keys of the given object as an array.
     *
     *     var values = Ext.Object.getKeys({
     *         name: 'Jacky',
     *         loves: 'food'
     *     }); // ['name', 'loves']
     *
     * @param {Object} object
     * @return {String[]} An array of keys from the object
     * @method
     */
    getKeys: ('keys' in Object.prototype) ? Object.keys : function(object) {
        var keys = [],
            property;

        for (property in object) {
            if (object.hasOwnProperty(property)) {
                keys.push(property);
            }
        }

        return keys;
    },

    /**
     * Gets the total number of this object's own properties
     *
     *     var size = Ext.Object.getSize({
     *         name: 'Jacky',
     *         loves: 'food'
     *     }); // size equals 2
     *
     * @param {Object} object
     * @return {Number} size
     */
    getSize: function(object) {
        var size = 0,
            property;

        for (property in object) {
            if (object.hasOwnProperty(property)) {
                size++;
            }
        }

        return size;
    }
};


/**
 * A convenient alias method for {@link Ext.Object#merge}.
 *
 * @member Ext
 * @method merge
 * @alias Ext.Object#merge
 */
Ext.merge = Ext.Object.merge;

/**
 * Alias for {@link Ext.Object#toQueryString}.
 *
 * @member Ext
 * @method urlEncode
 * @alias Ext.Object#toQueryString
 * @deprecated 4.0.0 Use {@link Ext.Object#toQueryString} instead
 */
Ext.urlEncode = function() {
    var args = Ext.Array.from(arguments),
        prefix = '';

    // Support for the old `pre` argument
    if ((typeof args[1] === 'string')) {
        prefix = args[1] + '&';
        args[1] = false;
    }

    return prefix + Ext.Object.toQueryString.apply(Ext.Object, args);
};

/**
 * Alias for {@link Ext.Object#fromQueryString}.
 *
 * @member Ext
 * @method urlDecode
 * @alias Ext.Object#fromQueryString
 * @deprecated 4.0.0 Use {@link Ext.Object#fromQueryString} instead
 */
Ext.urlDecode = function() {
    return Ext.Object.fromQueryString.apply(Ext.Object, arguments);
};

})();

/**
 * @class Ext.Date
 * A set of useful static methods to deal with date
 * Note that if Ext.Date is required and loaded, it will copy all methods / properties to
 * this object for convenience
 *
 * The date parsing and formatting syntax contains a subset of
 * <a href="http://www.php.net/date">PHP's date() function</a>, and the formats that are
 * supported will provide results equivalent to their PHP versions.
 *
 * The following is a list of all currently supported formats:
 * <pre class="">
Format  Description                                                               Example returned values
------  -----------------------------------------------------------------------   -----------------------
  d     Day of the month, 2 digits with leading zeros                             01 to 31
  D     A short textual representation of the day of the week                     Mon to Sun
  j     Day of the month without leading zeros                                    1 to 31
  l     A full textual representation of the day of the week                      Sunday to Saturday
  N     ISO-8601 numeric representation of the day of the week                    1 (for Monday) through 7 (for Sunday)
  S     English ordinal suffix for the day of the month, 2 characters             st, nd, rd or th. Works well with j
  w     Numeric representation of the day of the week                             0 (for Sunday) to 6 (for Saturday)
  z     The day of the year (starting from 0)                                     0 to 364 (365 in leap years)
  W     ISO-8601 week number of year, weeks starting on Monday                    01 to 53
  F     A full textual representation of a month, such as January or March        January to December
  m     Numeric representation of a month, with leading zeros                     01 to 12
  M     A short textual representation of a month                                 Jan to Dec
  n     Numeric representation of a month, without leading zeros                  1 to 12
  t     Number of days in the given month                                         28 to 31
  L     Whether it&#39;s a leap year                                                  1 if it is a leap year, 0 otherwise.
  o     ISO-8601 year number (identical to (Y), but if the ISO week number (W)    Examples: 1998 or 2004
        belongs to the previous or next year, that year is used instead)
  Y     A full numeric representation of a year, 4 digits                         Examples: 1999 or 2003
  y     A two digit representation of a year                                      Examples: 99 or 03
  a     Lowercase Ante meridiem and Post meridiem                                 am or pm
  A     Uppercase Ante meridiem and Post meridiem                                 AM or PM
  g     12-hour format of an hour without leading zeros                           1 to 12
  G     24-hour format of an hour without leading zeros                           0 to 23
  h     12-hour format of an hour with leading zeros                              01 to 12
  H     24-hour format of an hour with leading zeros                              00 to 23
  i     Minutes, with leading zeros                                               00 to 59
  s     Seconds, with leading zeros                                               00 to 59
  u     Decimal fraction of a second                                              Examples:
        (minimum 1 digit, arbitrary number of digits allowed)                     001 (i.e. 0.001s) or
                                                                                  100 (i.e. 0.100s) or
                                                                                  999 (i.e. 0.999s) or
                                                                                  999876543210 (i.e. 0.999876543210s)
  O     Difference to Greenwich time (GMT) in hours and minutes                   Example: +1030
  P     Difference to Greenwich time (GMT) with colon between hours and minutes   Example: -08:00
  T     Timezone abbreviation of the machine running the code                     Examples: EST, MDT, PDT ...
  Z     Timezone offset in seconds (negative if west of UTC, positive if east)    -43200 to 50400
  c     ISO 8601 date
        Notes:                                                                    Examples:
        1) If unspecified, the month / day defaults to the current month / day,   1991 or
           the time defaults to midnight, while the timezone defaults to the      1992-10 or
           browser's timezone. If a time is specified, it must include both hours 1993-09-20 or
           and minutes. The "T" delimiter, seconds, milliseconds and timezone     1994-08-19T16:20+01:00 or
           are optional.                                                          1995-07-18T17:21:28-02:00 or
        2) The decimal fraction of a second, if specified, must contain at        1996-06-17T18:22:29.98765+03:00 or
           least 1 digit (there is no limit to the maximum number                 1997-05-16T19:23:30,12345-0400 or
           of digits allowed), and may be delimited by either a '.' or a ','      1998-04-15T20:24:31.2468Z or
        Refer to the examples on the right for the various levels of              1999-03-14T20:24:32Z or
        date-time granularity which are supported, or see                         2000-02-13T21:25:33
        http://www.w3.org/TR/NOTE-datetime for more info.                         2001-01-12 22:26:34
  U     Seconds since the Unix Epoch (January 1 1970 00:00:00 GMT)                1193432466 or -2138434463
  MS    Microsoft AJAX serialized dates                                           \/Date(1238606590509)\/ (i.e. UTC milliseconds since epoch) or
                                                                                  \/Date(1238606590509+0800)\/
</pre>
 *
 * Example usage (note that you must escape format specifiers with '\\' to render them as character literals):
 * <pre><code>
// Sample date:
// 'Wed Jan 10 2007 15:05:01 GMT-0600 (Central Standard Time)'

var dt = new Date('1/10/2007 03:05:01 PM GMT-0600');
console.log(Ext.Date.format(dt, 'Y-m-d'));                          // 2007-01-10
console.log(Ext.Date.format(dt, 'F j, Y, g:i a'));                  // January 10, 2007, 3:05 pm
console.log(Ext.Date.format(dt, 'l, \\t\\he jS \\of F Y h:i:s A')); // Wednesday, the 10th of January 2007 03:05:01 PM
</code></pre>
 *
 * Here are some standard date/time patterns that you might find helpful.  They
 * are not part of the source of Ext.Date, but to use them you can simply copy this
 * block of code into any script that is included after Ext.Date and they will also become
 * globally available on the Date object.  Feel free to add or remove patterns as needed in your code.
 * <pre><code>
Ext.Date.patterns = {
    ISO8601Long:"Y-m-d H:i:s",
    ISO8601Short:"Y-m-d",
    ShortDate: "n/j/Y",
    LongDate: "l, F d, Y",
    FullDateTime: "l, F d, Y g:i:s A",
    MonthDay: "F d",
    ShortTime: "g:i A",
    LongTime: "g:i:s A",
    SortableDateTime: "Y-m-d\\TH:i:s",
    UniversalSortableDateTime: "Y-m-d H:i:sO",
    YearMonth: "F, Y"
};
</code></pre>
 *
 * Example usage:
 * <pre><code>
var dt = new Date();
console.log(Ext.Date.format(dt, Ext.Date.patterns.ShortDate));
</code></pre>
 * <p>Developer-written, custom formats may be used by supplying both a formatting and a parsing function
 * which perform to specialized requirements. The functions are stored in {@link #parseFunctions} and {@link #formatFunctions}.</p>
 * @singleton
 */

/*
 * Most of the date-formatting functions below are the excellent work of Baron Schwartz.
 * (see http://www.xaprb.com/blog/2005/12/12/javascript-closures-for-runtime-efficiency/)
 * They generate precompiled functions from format patterns instead of parsing and
 * processing each pattern every time a date is formatted. These functions are available
 * on every Date object.
 */

(function() {

// create private copy of Ext's Ext.util.Format.format() method
// - to remove unnecessary dependency
// - to resolve namespace conflict with MS-Ajax's implementation
function xf(format) {
    var args = Array.prototype.slice.call(arguments, 1);
    return format.replace(/\{(\d+)\}/g, function(m, i) {
        return args[i];
    });
}

Ext.Date = {
    /**
     * Returns the current timestamp
     * @return {Date} The current timestamp
     * @method
     */
    now: Date.now || function() {
        return +new Date();
    },

    /**
     * @private
     * Private for now
     */
    toString: function(date) {
        var pad = Ext.String.leftPad;

        return date.getFullYear() + "-"
            + pad(date.getMonth() + 1, 2, '0') + "-"
            + pad(date.getDate(), 2, '0') + "T"
            + pad(date.getHours(), 2, '0') + ":"
            + pad(date.getMinutes(), 2, '0') + ":"
            + pad(date.getSeconds(), 2, '0');
    },

    /**
     * Returns the number of milliseconds between two dates
     * @param {Date} dateA The first date
     * @param {Date} dateB (optional) The second date, defaults to now
     * @return {Number} The difference in milliseconds
     */
    getElapsed: function(dateA, dateB) {
        return Math.abs(dateA - (dateB || new Date()));
    },

    /**
     * Global flag which determines if strict date parsing should be used.
     * Strict date parsing will not roll-over invalid dates, which is the
     * default behaviour of javascript Date objects.
     * (see {@link #parse} for more information)
     * Defaults to <tt>false</tt>.
     * @type Boolean
    */
    useStrict: false,

    // private
    formatCodeToRegex: function(character, currentGroup) {
        // Note: currentGroup - position in regex result array (see notes for Ext.Date.parseCodes below)
        var p = utilDate.parseCodes[character];

        if (p) {
          p = typeof p == 'function'? p() : p;
          utilDate.parseCodes[character] = p; // reassign function result to prevent repeated execution
        }

        return p ? Ext.applyIf({
          c: p.c ? xf(p.c, currentGroup || "{0}") : p.c
        }, p) : {
            g: 0,
            c: null,
            s: Ext.String.escapeRegex(character) // treat unrecognised characters as literals
        };
    },

    /**
     * <p>An object hash in which each property is a date parsing function. The property name is the
     * format string which that function parses.</p>
     * <p>This object is automatically populated with date parsing functions as
     * date formats are requested for Ext standard formatting strings.</p>
     * <p>Custom parsing functions may be inserted into this object, keyed by a name which from then on
     * may be used as a format string to {@link #parse}.<p>
     * <p>Example:</p><pre><code>
Ext.Date.parseFunctions['x-date-format'] = myDateParser;
</code></pre>
     * <p>A parsing function should return a Date object, and is passed the following parameters:<div class="mdetail-params"><ul>
     * <li><code>date</code> : String<div class="sub-desc">The date string to parse.</div></li>
     * <li><code>strict</code> : Boolean<div class="sub-desc">True to validate date strings while parsing
     * (i.e. prevent javascript Date "rollover") (The default must be false).
     * Invalid date strings should return null when parsed.</div></li>
     * </ul></div></p>
     * <p>To enable Dates to also be <i>formatted</i> according to that format, a corresponding
     * formatting function must be placed into the {@link #formatFunctions} property.
     * @property parseFunctions
     * @type Object
     */
    parseFunctions: {
        "MS": function(input, strict) {
            // note: the timezone offset is ignored since the MS Ajax server sends
            // a UTC milliseconds-since-Unix-epoch value (negative values are allowed)
            var re = new RegExp('\\/Date\\(([-+])?(\\d+)(?:[+-]\\d{4})?\\)\\/');
            var r = (input || '').match(re);
            return r? new Date(((r[1] || '') + r[2]) * 1) : null;
        }
    },
    parseRegexes: [],

    /**
     * <p>An object hash in which each property is a date formatting function. The property name is the
     * format string which corresponds to the produced formatted date string.</p>
     * <p>This object is automatically populated with date formatting functions as
     * date formats are requested for Ext standard formatting strings.</p>
     * <p>Custom formatting functions may be inserted into this object, keyed by a name which from then on
     * may be used as a format string to {@link #format}. Example:</p><pre><code>
Ext.Date.formatFunctions['x-date-format'] = myDateFormatter;
</code></pre>
     * <p>A formatting function should return a string representation of the passed Date object, and is passed the following parameters:<div class="mdetail-params"><ul>
     * <li><code>date</code> : Date<div class="sub-desc">The Date to format.</div></li>
     * </ul></div></p>
     * <p>To enable date strings to also be <i>parsed</i> according to that format, a corresponding
     * parsing function must be placed into the {@link #parseFunctions} property.
     * @property formatFunctions
     * @type Object
     */
    formatFunctions: {
        "MS": function() {
            // UTC milliseconds since Unix epoch (MS-AJAX serialized date format (MRSF))
            return '\\/Date(' + this.getTime() + ')\\/';
        }
    },

    y2kYear : 50,

    /**
     * Date interval constant
     * @type String
     */
    MILLI : "ms",

    /**
     * Date interval constant
     * @type String
     */
    SECOND : "s",

    /**
     * Date interval constant
     * @type String
     */
    MINUTE : "mi",

    /** Date interval constant
     * @type String
     */
    HOUR : "h",

    /**
     * Date interval constant
     * @type String
     */
    DAY : "d",

    /**
     * Date interval constant
     * @type String
     */
    MONTH : "mo",

    /**
     * Date interval constant
     * @type String
     */
    YEAR : "y",

    /**
     * <p>An object hash containing default date values used during date parsing.</p>
     * <p>The following properties are available:<div class="mdetail-params"><ul>
     * <li><code>y</code> : Number<div class="sub-desc">The default year value. (defaults to undefined)</div></li>
     * <li><code>m</code> : Number<div class="sub-desc">The default 1-based month value. (defaults to undefined)</div></li>
     * <li><code>d</code> : Number<div class="sub-desc">The default day value. (defaults to undefined)</div></li>
     * <li><code>h</code> : Number<div class="sub-desc">The default hour value. (defaults to undefined)</div></li>
     * <li><code>i</code> : Number<div class="sub-desc">The default minute value. (defaults to undefined)</div></li>
     * <li><code>s</code> : Number<div class="sub-desc">The default second value. (defaults to undefined)</div></li>
     * <li><code>ms</code> : Number<div class="sub-desc">The default millisecond value. (defaults to undefined)</div></li>
     * </ul></div></p>
     * <p>Override these properties to customize the default date values used by the {@link #parse} method.</p>
     * <p><b>Note: In countries which experience Daylight Saving Time (i.e. DST), the <tt>h</tt>, <tt>i</tt>, <tt>s</tt>
     * and <tt>ms</tt> properties may coincide with the exact time in which DST takes effect.
     * It is the responsiblity of the developer to account for this.</b></p>
     * Example Usage:
     * <pre><code>
// set default day value to the first day of the month
Ext.Date.defaults.d = 1;

// parse a February date string containing only year and month values.
// setting the default day value to 1 prevents weird date rollover issues
// when attempting to parse the following date string on, for example, March 31st 2009.
Ext.Date.parse('2009-02', 'Y-m'); // returns a Date object representing February 1st 2009
</code></pre>
     * @property defaults
     * @type Object
     */
    defaults: {},

    /**
     * @property {String[]} dayNames
     * An array of textual day names.
     * Override these values for international dates.
     * Example:
     * <pre><code>
Ext.Date.dayNames = [
    'SundayInYourLang',
    'MondayInYourLang',
    ...
];
</code></pre>
     */
    dayNames : [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],

    /**
     * @property {String[]} monthNames
     * An array of textual month names.
     * Override these values for international dates.
     * Example:
     * <pre><code>
Ext.Date.monthNames = [
    'JanInYourLang',
    'FebInYourLang',
    ...
];
</code></pre>
     */
    monthNames : [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],

    /**
     * @property {Object} monthNumbers
     * An object hash of zero-based javascript month numbers (with short month names as keys. note: keys are case-sensitive).
     * Override these values for international dates.
     * Example:
     * <pre><code>
Ext.Date.monthNumbers = {
    'ShortJanNameInYourLang':0,
    'ShortFebNameInYourLang':1,
    ...
};
</code></pre>
     */
    monthNumbers : {
        Jan:0,
        Feb:1,
        Mar:2,
        Apr:3,
        May:4,
        Jun:5,
        Jul:6,
        Aug:7,
        Sep:8,
        Oct:9,
        Nov:10,
        Dec:11
    },
    /**
     * @property {String} defaultFormat
     * <p>The date format string that the {@link Ext.util.Format#dateRenderer}
     * and {@link Ext.util.Format#date} functions use.  See {@link Ext.Date} for details.</p>
     * <p>This may be overridden in a locale file.</p>
     */
    defaultFormat : "m/d/Y",
    /**
     * Get the short month name for the given month number.
     * Override this function for international dates.
     * @param {Number} month A zero-based javascript month number.
     * @return {String} The short month name.
     */
    getShortMonthName : function(month) {
        return utilDate.monthNames[month].substring(0, 3);
    },

    /**
     * Get the short day name for the given day number.
     * Override this function for international dates.
     * @param {Number} day A zero-based javascript day number.
     * @return {String} The short day name.
     */
    getShortDayName : function(day) {
        return utilDate.dayNames[day].substring(0, 3);
    },

    /**
     * Get the zero-based javascript month number for the given short/full month name.
     * Override this function for international dates.
     * @param {String} name The short/full month name.
     * @return {Number} The zero-based javascript month number.
     */
    getMonthNumber : function(name) {
        // handle camel casing for english month names (since the keys for the Ext.Date.monthNumbers hash are case sensitive)
        return utilDate.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
    },

    /**
     * Checks if the specified format contains hour information
     * @param {String} format The format to check
     * @return {Boolean} True if the format contains hour information
     * @method
     */
    formatContainsHourInfo : (function(){
        var stripEscapeRe = /(\\.)/g,
            hourInfoRe = /([gGhHisucUOPZ]|MS)/;
        return function(format){
            return hourInfoRe.test(format.replace(stripEscapeRe, ''));
 