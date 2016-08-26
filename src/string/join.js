import stringify from './stringify';

/**
 * Joins strings together with a given separator.
 *
 * @param {string} sep The separator of strings.
 * @param {string} strings The array of strings to join.
 * @returns {string} Returns the joined stringify.
 *
 * @example
 * join('', 'Lorem', 'Ipsum');
 * // => 'LoremIpsum'
 *
 * join(' ', 'Lorem', null, '');
 * // => 'Lorem'
 */
function join(sep, ...strings) {
    let result = [];
    sep = stringify(sep);

    strings.forEach(item => {
        item = stringify(item);
        item.length && result.push(item);
    });

    return result.join(stringify(sep));
}

export default join;