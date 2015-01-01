var toString = require('../to/string');

/**
 * Checks if a string contains a given substring.
 *
 * @param target The string to checks.
 * @param sub The substring.
 * @param from Optional. The index to start search.
 * @returns {boolean} Returns `true` if the string contains the given substring, else 'false'.
 *
 * @example
 *
 * string.contains('lorem ipsum', 'rem');
 * // => true
 *
 * string.contains('lorem ipsum', 'foo');
 * // => false
 */
module.exports = function contains(target, sub, from) {
    return toString(target).indexOf(toString(sub), from) !== -1;
};