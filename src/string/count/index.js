import { INVALID_STRINGS } from '../../constants/errors';
import isString from '../../common/is-string';

/**
 * Counts the number of occurrences of a substring in the given string.
 *
 * @memberOf string
 * @param {string} value The string to search.
 * @param {string} substring The substring to search.
 * @returns {number} Returns the number of occurrences.
 */
export default function (value, substring) {
    if (!isString(value) || !isString(substring)) {
        throw new TypeError(INVALID_STRINGS);
    }

    if (value.length === 0 || substring.length === 0) {
        return 0;
    }

    let counter = 0;
    let pos = value.indexOf(substring);

    while (pos >= 0) {
        counter += 1;
        pos = value.indexOf(substring, pos + 1);
    }

    return counter;
}
