import isNumber from './isNumber';

/**
 * Checks if `target` is integer.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is integer, else 'false'.
 *
 * @example
 *
 * isInteger(42);
 * // => true
 *
 * isInteger(42.42);
 * // => false
 *
 * isInteger('42');
 * // => false
 */
export default target => isNumber(target) && target % 1 === 0;