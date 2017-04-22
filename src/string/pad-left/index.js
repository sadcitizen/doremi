import repeat from '../repeat';

/**
 * Pads a string on the left side if its length is less then
 * the given padding length.
 *
 * @param {string|*} target The string to pad.
 * @param {number} length The padding length.
 * @param {string} char The string used as padding.
 * @returns {string} Returns the padded string.
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
export default function (target, length, char) {
    target = String(target);
    char = (String(char) || ' ').charAt(0);
    return target.length < (length |= 0) ? repeat(char, length - target.length) + target : target;
}
