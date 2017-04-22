import isNumber from '../is-number';

/**
 * Checks if `target` is integer.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is integer, else 'false'.
 *
 * @example
 *
 * isInt(42);
 * // => true
 *
 * isInt(42.42);
 * // => false
 *
 * isInt('42');
 * // => false
 */
export default target => isNumber(target) && target % 1 === 0;
