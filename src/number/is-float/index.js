import isNumber from '../is-number';

/**
 * Checks if `target` is float.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is float, else 'false'.
 *
 * @example
 *
 * isFloat(42);
 * // => false
 *
 * isFloat(42.42);
 * // => true
 *
 * isFloat('42.42');
 * // => false
 */
export default target => isNumber(target) && target % 1 !== 0;
