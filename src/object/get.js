var isObject = require('../is/object');
var isString = require('../is/string');
var isExists = require('../is/exists');
var isDefined = require('../is/defined');

/**
 * Resolves the value of property `key` on `target`.
 * Returns default value `def` if the property value is `undefined`.
 *
 * @param target The object to query.
 * @param key The name of property to resolve.
 * @param def Default value.
 * @returns {*} Returns the value of property `key` or default value `def`.
 *
 * @example
 *
 * var lorem = {
 *     lorem: {
 *         ipsum: {
 *             dolor: {
 *                 sit: 'amet'
 *             }
 *         },
 *         foo: function () {
 *             return 'bar';
 *         }
 *     },
 *     bar: 42
 * };
 *
 * object.get(lorem, 'bar');
 * // => 42
 *
 * object.get(lorem, 'lorem.ipsum.dolor.sit');
 * // => 'amet'
 *
 * object.get(lorem, 'lorem.ipsum.foo');
 * // => undefined
 *
 * object.get(lorem, 'lorem.ipsum.foo', 42);
 * // => 42
 */
module.exports = function get(target, key, def) {
    if (!isObject(target)) {
        throw new TypeError('Target must be an object!');
    }

    if (!isString(key)) {
        throw new TypeError('Property must be a string!');
    }

    var obj = target,
        parts = key.split('.'),
        last = parts.pop();

    /* jshint -W084 */
    while (key = parts.shift()) {
        obj = obj[key];
        if (!isExists(obj)) {
            return def;
        }
    }
    /* jshint +W084 */

    return isDefined(obj[last]) ? obj[last] : def;
};