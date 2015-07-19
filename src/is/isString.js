import type from './type';

/**
 * Checks if `target` is string.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is string, else 'false'.
 *
 * @example
 *
 * isString(false);
 * // => false
 *
 * isString(42);
 * // => false
 *
 * isString('42');
 * // => true
 */
export default target => type(target) === 'string';