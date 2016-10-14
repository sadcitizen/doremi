import isUndefined from '../is/is-undefined';
import getValue from './get-value';

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
 * hasValue(lorem, 'bar');
 * // => true
 *
 * hasValue(lorem, 'lorem.ipsum.dolor.sit');
 * // => true
 *
 * hasValue(lorem, 'lorem.ipsum.foo');
 * // => false
 *
 * hasValue(lorem, 'lorem.ipsum.foo');
 * // => false
 *
 * hasvalue(lorem, 'lorem.toString');
 * // => true
 */
function hasValue(target, key) {
    return !isUndefined(getValue(target, key));
}

export default hasValue;
