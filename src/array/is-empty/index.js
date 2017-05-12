import isDefined from '../../common/is-defined';

/**
 * Checks if the given array is 'null', `undefined` or zero length.
 *
 * @param {*} target The array to check.
 * @returns {boolean} Return `true` if `target` is `null`, `undefined` or empty, else `false`.
 *
 * @example
 * isEmpty(null);
 * // => true
 *
 * isEmpty(undefined);
 * // => true
 *
 * isEmpty([]);
 * // => true
 */
export default target => !isDefined(target) || target.length === 0;
