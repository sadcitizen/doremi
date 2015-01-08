var toString = require('../to/string');

/**
 * Checks if a string contains a given substring.
 *
 * @param {string} target The string to checks.
 * @param {string} sub The substring.
 * @param {number} from Optional. The index to start search.
 * @returns {boolean} Returns `true` if the string contains the given substring, else 'false'.
 *
 * @example
 *
 * st.contains('lorem ipsum', 'rem');
 * // => true
 *
 * st.contains('lorem ipsum', 'foo');
 * // => false
 */
module.exports = function contains(target, sub, from) {
    return toString(target).indexOf(toString(sub), from) !== -1;
};