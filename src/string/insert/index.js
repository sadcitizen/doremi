/**
 * Inserts a substring in a string before the given index.
 * If the index is larger than the length of the string the substring is appended at the end.
 *
 * @param {string} target The string to insert.
 * @param {string} sub The substring.
 * @param {number} index The position of substring.
 * @returns {string} Returns the string with the inserted substring.
 *
 * @example
 * insert(', World!', 'Hello', 0);
 * // => 'Hello, World!'
 *
 * insert('o, World!', 'Hell', -10);
 * // => 'Hello, World!'
 */
export default (target, sub, index) => target.slice(0, (index |= 0)) + sub + target.slice(index);
