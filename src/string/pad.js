import toString from '../to/toString';
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
 * pad('lorem', 9, '^');
 * // => '^^lorem^^'
 *
 * pad('lorem', 5, '#');
 * // => 'lorem'
 *
 * pad('lorem', 10);
 * // => '   lorem  '
 */
function pad(target, length, char) {
    target = toString(target);
    length |= 0;

    if (target.length > length) {
        return target;
    }

    char = (toString(char) || ' ').charAt(0);

    const llen = Math.ceil((length - target.length) / 2);
    const rlen = length - target.length - llen;

    return repeat(char, llen) + target + repeat(char, rlen);
}

export default pad;