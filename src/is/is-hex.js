import isString from '../string/is-string';
const HEX_REGEX = /^[a-fA-F0-9]+$/;

/**
 * Checks if `target` is a hex string.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is a hex string, else 'false'.
 *
 * @example
 *
 * isHex('42');
 * // => true
 *
 * isHex('00ffcc');
 * // => true
 *
 * isHex('99zzxx');
 * // => false
 */
export default target => isString(target) && HEX_REGEX.test(target);
