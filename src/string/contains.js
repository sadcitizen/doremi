import string from '../to/string';

/**
 * Checks if a string contains a given substring.
 *
 * @param {string} target The string to checks.
 * @param {string} sub The substring.
 * @param {number} start Optional. The index to start search.
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
function contains(target, sub, start) {
    return string(target).indexOf(string(sub), start) !== -1;
}

export default contains;