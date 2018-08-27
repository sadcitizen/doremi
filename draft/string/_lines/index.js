/**
 * Splits the `target` into array of _lines.
 *
 * @param {string} target The string to split.
 * @returns {Array} The array of _lines.
 *
 * @example
 * _lines('Lorem ipsum');
 * // => ['Lorem ipsum']
 *
 * _lines('Lorem \nipsum');
 * // => ['Lorem ', 'ipsum']
 */
export default target => String(target).split(/\r?\n/g);
