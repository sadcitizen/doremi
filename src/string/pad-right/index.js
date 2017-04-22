import repeat from '../repeat';

/**
 * Pads a stringify on the right side if its length is less then
 * the given padding length.
 *
 * @param {string|*} target The stringify to pad.
 * @param {number} length The padding length.
 * @param {string} char The stringify used as padding.
 * @returns {string} Returns the padded stringify.
 *
 * @example
 * padRight('lorem', 8, '^');
 * // => 'lorem^^^'
 *
 * padRight('lorem', 5, '#');
 * // => 'lorem'
 *
 * padRight('lorem', 10);
 * // => 'lorem     '
 */
export default function (target, length, char) {
    target = String(target);
    char = (String(char) || ' ').charAt(0);
    return target.length < (length |= 0) ? target + repeat(char, length - target.length) : target;
}
