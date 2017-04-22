import isDefined from '../../common/is-defined';

/**
 * Joins strings together with a given separator.
 *
 * @param {string} sep The separator of strings.
 * @param {string} strings The array of strings to join.
 * @returns {string} Returns the joined string.
 *
 * @example
 * join('', 'Lorem', 'Ipsum');
 * // => 'LoremIpsum'
 *
 * join(' ', 'Lorem', null, '');
 * // => 'Lorem'
 */
export default (sep, ...strings) => strings.filter(isDefined).join(sep);
