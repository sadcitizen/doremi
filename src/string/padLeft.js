import stringify from './stringify';
import repeat from './repeat';

/**
 * Pads a stringify on the left side if its length is less then
 * the given padding length.
 *
 * @param {string|*} target The stringify to pad.
 * @param {number} length The padding length.
 * @param {string} char The stringify used as padding.
 * @returns {string} Returns the padded stringify.
 *
 * @example
 * padLeft('lorem', 8, '^');
 * // => '^^^lorem'
 *
 * padLeft('lorem', 5, '#');
 * // => 'lorem'
 *
 * padLeft('lorem', 10);
 * // => '     lorem'
 */
function padLeft(target, length, char) {
    target = stringify(target);
    char = (stringify(char) || ' ').charAt(0);
    return target.length < (length |= 0) ? repeat(char, length - target.length) + target : target;
}

export default padLeft;