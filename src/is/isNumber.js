import type from './type';

/**
 * Checks if `target` is number.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is number, else 'false'.
 *
 * @example
 *
 * isNumber(false);
 * // => false
 *
 * isNumber(42);
 * // => true
 *
 * isNumber('42');
 * // => false
 */
export default target => type(target) === 'number';