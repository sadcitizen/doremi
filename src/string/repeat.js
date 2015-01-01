var string = require('../to/string');

/**
 * Repeats a given string n times.
 *
 * @param {String} target The string to repeat.
 * @param {Number} count The number of times to repeat.
 * @returns {String} Returns the repeated string.
 *
 * @example
 *
 * string.repeat('&', 4);
 * // => '&&&&'
 *
 * string.repeat(12, 2);
 * // => '1212'
 */
module.exports = function repeat(target, count) {
    var result = '';

    target = string(target);
    count = count | 0;

    if (target.length === 0) {
        return result;
    }

    for (; count > 0; count >>>= 1, target += target) {
        if ((count & 1) === 1) {
            result += target;
        }
    }
    return result;
};