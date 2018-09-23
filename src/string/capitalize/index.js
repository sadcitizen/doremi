import { INVALID_STRING_ARGUMENT } from '../../constants/errors';
import isString from '../../common/is-string';

/**
 * Capitalizes the first character of the given string.
 *
 * @param {string} value The string to capitalize.
 * @returns {string} Returns the capitalized string.
 *
 * @example
 * capitalize('hi!');
 * // => 'Hi!'
 *
 * capitalize();
 * // => '' (empty string)
 */
export default function (value = '') {
    if (!isString(value)) {
        throw new TypeError(INVALID_STRING_ARGUMENT);
    }

    if (value.length === 0) {
        return '';
    }

    return value.charAt(0).toUpperCase() + value.slice(1);
}
