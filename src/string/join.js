import string from '../to/string';

/**
 * Joins strings together with a given separator.
 *
 * @param {string} sep The separator of strings.
 * @param {string} strings The array of strings to join.
 * @returns {string} Returns the joined string.
 *
 * @example
 *
 * st.join('', 'Lorem', 'Ipsum');
 * // => 'LoremIpsum'
 *
 * st.join(' ', 'Lorem', null, '');
 * // => 'Lorem'
 */
function join(sep, ...strings) {
    var result = [];
    sep = string(sep);

    strings.forEach(function (item) {
        item = string(item);
        if (item.length) {
            result.push(item);
        }
    });
    return result.join(string(sep));
}

export default join;