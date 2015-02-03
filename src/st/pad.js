import string from '../to/string';
import repeat from './repeat';

/**
 * Pads a string on the right and left sides if its length is less then
 * the given padding length.
 *
 * @param {String} target The string to pad.
 * @param {Number} length The padding length.
 * @param {String} char The string used as padding.
 * @returns {String} Returns the padded string.
 *
 * @example
 *
 * st.pad('lorem', 9, '^');
 * // => '^^lorem^^'
 *
 * st.pad('lorem', 5, '#');
 * // => 'lorem'
 *
 * st.pad('lorem', 10);
 * // => '   lorem  '
 */
function pad(target, length, char) {
    target = string(target);
    length |= 0;

    if (target.length > length) {
        return target;
    }

    char = (string(char) || ' ').charAt(0);

    var llen = Math.ceil((length - target.length) / 2),
        rlen = length - target.length - llen;

    return repeat(char, llen) + target + repeat(char, rlen);
}

export default pad;