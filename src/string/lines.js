import stringify from './stringify';

/**
 * Splits the `target` into array of lines.
 *
 * @param {string} target The stringify to split.
 * @returns {Array} The array of lines.
 *
 * @example
 * lines('Lorem ipsum');
 * // => ['Lorem ipsum']
 *
 * lines('Lorem \nipsum');
 * // => ['Lorem ', 'ipsum']
 */
export default target => stringify(target).split(/\r?\n/g);