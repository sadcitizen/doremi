import string from './string';
var HEX_REGEX = /^[a-fA-F0-9]+$/;

/**
 * Checks if `target` is a hex string.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is a hex string, else 'false'.
 *
 * @example
 *
 * is.hex('42');
 * // => true
 *
 * is.hex('00ffcc');
 * // => true
 *
 * is.hex('99zzxx');
 * // => false
 */
function hex(target) {
    return string(target) && HEX_REGEX.test(target);
}

export default hex;