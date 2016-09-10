import isUndefined from './is-undefined';
import isNull from './is-null';

/**
 * Checks if `target` is 'null' or `undefined`.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Return `true` if `target` is not `null` and `undefined`, else `false`.
 *
 * @example
 *
 * isExists(null);
 * // => false
 *
 * isExists('');
 * // => true
 */
export default target => !isUndefined(target) && !isNull(target);