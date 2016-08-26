import stringify from './stringify';
import repeat from './repeat';

/**
 * Pads a stringify on the right and left sides if its length is less then
 * the given padding length.
 *
 * @param {String} target The stringify to pad.
 * @param {Number} length The padding length.
 * @param {String} char The stringify used as padding.
 * @returns {String} Returns the padded stringify.
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
    target = stringify(target);
    length |= 0;

    if (target.length > length) {
        return target;
    }

    char = (stringify(char) || ' ').charAt(0);

    const llen = Math.ceil((length - target.length) / 2);
    const rlen = length - target.length - llen;

    return repeat(char, llen) + target + repeat(char, rlen);
}

export default pad;