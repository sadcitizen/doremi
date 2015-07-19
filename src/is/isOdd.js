import isNumber from './isNumber';

/**
 * Checks if `target` is an odd number.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Return `true` if `target` is an odd number, else `false`.
 *
 * @example
 *
 * isOdd(null);
 * // => false
 *
 * isOdd(21);
 * // => true
 *
 * isOdd(20);
 * // => false
 */
export default target => isNumber(target) && target % 2 !== 0;