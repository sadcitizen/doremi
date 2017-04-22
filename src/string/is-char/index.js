import isString from '../is-string';

/**
 * Checks if `target` is a char.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is a char, else 'false'.
 *
 * @example
 *
 * isChar(false);
 * // => false
 *
 * isChar(42);
 * // => false
 *
 * isChar('42');
 * // => false
 *
 * isChar('4');
 * // => true
 */
export default target => isString(target) && target.length === 1;
