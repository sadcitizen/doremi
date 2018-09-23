import { INVALID_STRING_ARGUMENT } from '../../constants/errors';
import isString from '../../common/is-string';

/**
 * Splits the given string into an array of words.
 *
 * @category string
 * @param {string} value The string to split.
 * @returns {string[]} Returns the array of words.
 */
export default function (value) {
    if (!isString(value)) {
        throw new TypeError(INVALID_STRING_ARGUMENT);
    }

    return value
        .replace(/[_]+/g, ' ')
        .replace(/[^\w\s]+/g, ' ')
        .replace(/^\s+|\s+$/g, '')
        .replace(/([a-z])([A-Z]+)/g, '$1 $2')
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
        .replace(/([a-zA-Z]+)(\d+)/g, '$1 $2')
        .replace(/(\d+)([a-zA-Z]+)/g, '$1 $2')
        .split(' ');
}
