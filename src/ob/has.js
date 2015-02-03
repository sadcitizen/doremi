import defined from '../is/defined';
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
 * ob.has(lorem, 'bar');
 * // => true
 *
 * ob.has(lorem, 'lorem.ipsum.dolor.sit');
 * // => true
 *
 * ob.has(lorem, 'lorem.ipsum.foo');
 * // => false
 *
 * ob.has(lorem, 'lorem.ipsum.foo');
 * // => false
 *
 * ob.has(lorem, 'lorem.toString');
 * // => true
 */
function has(target, key) {
    return defined(deepGet(target, key));
}

export default has;