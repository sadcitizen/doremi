import toString from '../to/toString';

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
 * contains('lorem ipsum', 'rem');
 * // => true
 *
 * contains('lorem ipsum', 'foo');
 * // => false
 */
export default (target, sub, start) => toString(target).indexOf(toString(sub), start) !== -1;