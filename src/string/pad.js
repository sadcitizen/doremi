var string = require('../to/string');
var repeat = require('./repeat');

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
 * string.pad('lorem', 9, '^');
 * // => '^^lorem^^'
 *
 * string.pad('lorem', 5, '#');
 * // => 'lorem'
 *
 * string.pad('lorem', 10);
 * // => '   lorem  '
 */
module.exports = function pad(target, length, char) {
    target = string(target);
    length |= 0;

    if (target.length > length) {
        return target;
    }

    char = string(char);
    char = (char || ' ').charAt(0);

    var llen = Math.ceil((length - target.length) / 2),
        rlen = length - target.length - llen;

    return repeat(char, llen) + target + repeat(char, rlen);
};