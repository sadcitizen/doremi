import isExist from '../is/is-exists';

/**
 * Returns a copy of the `target` without any `null` or `undefined` values.
 *
 * @param target The array to compact.
 * @returns {Array}
 *
 * @example
 *
 * compact([1, 2, 3]);
 * // => [1, 2, 3]
 *
 * compact([null, undefined, 1, false]);
 * // => [1, false]
 */
export default target => target.filter(isExist);
