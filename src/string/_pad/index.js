import repeat from '../_repeat';

/**
 * Pads a string on the right and left sides if its length is less then
 * the given padding length.
 *
 * @param {string} target The string to _pad.
 * @param {number} length The padding length.
 * @param {string} char The string used as padding.
 * @returns {String} Returns the padded string.
 *
 * @example
 *
 * _pad('lorem', 9, '^');
 * // => '^^lorem^^'
 *
 * _pad('lorem', 5, '#');
 * // => 'lorem'
 *
 * _pad('lorem', 10);
 * // => '   lorem  '
 */
export default function (target, length, char) {
    target = String(target);
    length |= 0;

    if (target.length > length) {
        return target;
    }

    char = (String(char) || ' ').charAt(0);

    const llen = Math.ceil((length - target.length) / 2);
    const rlen = length - target.length - llen;

    return repeat(char, llen) + target + repeat(char, rlen);
}
