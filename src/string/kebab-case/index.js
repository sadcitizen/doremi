import words from '../words';
/**
 * Converts the given string to kebab case.
 *
 * @memberOf string
 * @param {string} value The string to convert.
 * @returns {string} Returns kebab case string.
 */
export default function (value) {
    if (value.length === 0) {
        return '';
    }

    return words(value).join('-').toLowerCase();
}
