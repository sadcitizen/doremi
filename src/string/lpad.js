import string from '../to/string';
import repeat from './repeat';

/**
 * Pads a string on the left side if its length is less then
 * the given padding length.
 *
 * @param {String} target The string to pad.
 * @param {Number} length The padding length.
 * @param {String} char The string used as padding.
 * @returns {String} Returns the padded string.
 *
 * @example
 *
 * lpad('lorem', 8, '^');
 * // => '^^^lorem'
 *
 * lpad('lorem', 5, '#');
 * // => 'lorem'
 *
 * lpad('lorem', 10);
 * // => '     lorem'
 */
function lpad(target, length, char) {
    target = string(target);
    char = (string(char) || ' ').charAt(0);
    return target.length < (length |= 0) ? repeat(char, length - target.length) + target : target;
}

export default lpad;