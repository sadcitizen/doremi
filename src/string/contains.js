import stringify from './stringify';

/**
 * Checks if a stringify contains a given substring.
 *
 * @param {string} target The stringify to checks.
 * @param {string} sub The substring.
 * @param {number} [start] The index to start search. Optional.
 * @returns {boolean} Returns `true` if the stringify contains the given substring, else 'false'.
 *
 * @example
 * contains('lorem ipsum', 'rem');
 * // => true
 *
 * contains('lorem ipsum', 'foo');
 * // => false
 */
export default (target, sub, start) => stringify(target).indexOf(stringify(sub), start) !== -1;