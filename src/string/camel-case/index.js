import words from '../words';

/**
 * Converts the given string to camel case.
 *
 * @memberOf string
 * @param {string} value The string to convert.
 * @returns {string} Returns camel case string.
 */
export default function (value) {
    if (value.length === 0) {
        return '';
    }

    return words(value)
        .map(w => w.toLowerCase().replace(/^(.)/, c => c.toUpperCase()))
        .join('')
        .replace(/^(.)/, x => x.toLowerCase());
}
