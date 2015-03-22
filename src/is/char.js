import string from './string';

/**
 * Checks if `target` is a char.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is a char, else 'false'.
 *
 * @example
 *
 * char(false);
 * // => false
 *
 * char(42);
 * // => false
 *
 * char('42');
 * // => false
 *
 * char('4');
 * // => true
 */
function char(target) {
    return string(target) && target.length === 1;
}

export default char;