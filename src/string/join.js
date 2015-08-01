import toString from '../to/toString';

/**
 * Joins strings together with a given separator.
 *
 * @param {string} sep The separator of strings.
 * @param {string} strings The array of strings to join.
 * @returns {string} Returns the joined string.
 *
 * @example
 *
 * join('', 'Lorem', 'Ipsum');
 * // => 'LoremIpsum'
 *
 * join(' ', 'Lorem', null, '');
 * // => 'Lorem'
 */
function join(sep, ...strings) {
    var result = [];
    sep = toString(sep);

    strings.forEach(item => {
        item = toString(item);
        if (item.length) {
            result.push(item);
        }
    });
    return result.join(toString(sep));
}

export default join;