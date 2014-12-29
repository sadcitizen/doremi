var defined = require('../is/defined');
var get = require('./get');

/**
 * Checks if the given property name exists as a direct or nested property of `target`.
 *
 * @param target The object to check.
 * @param key The name of property to check.
 * @returns {*} Returns `true` if `target` has property with name 'key', else `false`.
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
 * object.has(lorem, 'bar');
 * // => true
 *
 * object.has(lorem, 'lorem.ipsum.dolor.sit');
 * // => true
 *
 * object.has(lorem, 'lorem.ipsum.foo');
 * // => false
 *
 * object.has(lorem, 'lorem.ipsum.foo');
 * // => false
 *
 * object.has(lorem, 'lorem.toString');
 * // => true
 */
module.exports = function has(target, key) {
    return defined(get(target, key));
};