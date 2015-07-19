import isUndefined from '../is/isUndefined';
import deepGet from './deepGet';

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
 * has(lorem, 'bar');
 * // => true
 *
 * has(lorem, 'lorem.ipsum.dolor.sit');
 * // => true
 *
 * has(lorem, 'lorem.ipsum.foo');
 * // => false
 *
 * has(lorem, 'lorem.ipsum.foo');
 * // => false
 *
 * has(lorem, 'lorem.toString');
 * // => true
 */
function has(target, key) {
    return !isUndefined(deepGet(target, key));
}

export default has;