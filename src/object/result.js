var is = require('../is');
var get = require('./get');

/**
 * Resolves the value of property `key` on `target`.
 * Returns default value `def` if the property value is `undefined`.
 *
 * @param target
 * @param key The name of property to resolve.
 * @param def Default value.
 * @returns {*} Returns the value of property `key` or default value `def`.
 *
 * @example
 *
 * var obj = { attr: 'value', arr: [0, 1, 2], num: 2, falsey: '', method: function () { return this.attr; } };
 *
 * object.result(obj, 'attr');
 * // => 'value'
 *
 * object.result(obj, 'some', 42);
 * // => 42
 *
 * object.result(obj, 'method');
 * // => 'value'
 */
module.exports = function result(target, key, def) {
    if (!is.object(target)) {
        throw new TypeError('Target must be an object!');
    }

    if (!is.string(key)) {
        throw new TypeError('Key must be a string!');
    }

    var prop = get(target, key);

    if (!is.defined(prop)) {
        prop = def;
    }

    return is.fn(prop) ? prop.call(target) : prop;
};