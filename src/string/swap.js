var string = require('../to/string');

/**
 * Swaps case of case-based characters in a given string.
 *
 * @param {String} target The string to swap.
 * @returns {String} Returns the swapped string.
 *
 * @example
 *
 * string.swap('hello');
 * // => 'HELLO'
 *
 * string.swap('lOREM');
 * // => 'Lorem'
 */
module.exports = function swap(target) {
    target = string(target);

    if (target.length === 0) {
        return '';
    }

    return target.replace(/\S/g, function (char) {
        return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    });
};