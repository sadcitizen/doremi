/**
 * Splits the `target` into array of lines.
 *
 * @param {string} target The string to split.
 * @returns {Array} The array of lines.
 *
 * @example
 * lines('Lorem ipsum');
 * // => ['Lorem ipsum']
 *
 * lines('Lorem \nipsum');
 * // => ['Lorem ', 'ipsum']
 */
export default target => String(target).split(/\r?\n/g);
