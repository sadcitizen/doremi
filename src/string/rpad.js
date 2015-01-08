var string = require('../to/string');
var repeat = require('./repeat');

/**
 * Pads a string on the right side if its length is less then
 * the given padding length.
 *
 * @param {String} target The string to pad.
 * @param {Number} length The padding length.
 * @param {String} char The string used as padding.
 * @returns {String} Returns the padded string.
 *
 * @example
 *
 * string.rpad('lorem', 8, '^');
 * // => 'lorem^^^'
 *
 * string.rpad('lorem', 5, '#');
 * // => 'lorem'
 *
 * string.rpad('lorem', 10);
 * // => 'lorem     '
 */
module.exports = function rpad(target, length, char) {
    target = string(target);
    return target.length < (length |= 0) ? target + repeat((char || ' ').charAt(0), length - target.length) : target;
};