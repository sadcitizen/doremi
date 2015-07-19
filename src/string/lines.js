import toString from '../to/toString';

/**
 * Splits the `target` into array of lines.
 *
 * @param {String} target The string to split.
 * @returns {Array} The array of lines.
 *
 * @example
 *
 * lines('Lorem ipsum');
 * // => ['Lorem ipsum']
 *
 * lines('Lorem \nipsum');
 * // => ['Lorem ', 'ipsum']
 */
export default target => toString(target).split(/\r?\n/g);