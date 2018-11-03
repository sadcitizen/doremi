import { INVALID_STRING_ARGUMENT } from '../../constants/errors';
import isString from '../../common/is-string';

/**
 * Converts first letter of the given string to uppercase.
 * If `restToLowerCase` is `true` the rest of the given string will be converted to lower case.
 *
 * @memberOf string
 * @param {string} value The string to capitalize.
 * @param {boolean} [restToLowerCase] The flag to convert the rest of the string.
 * @returns {string} Returns the capitalized string.
 */
export default function (value = '', restToLowerCase = false) {
    if (!isString(value)) {
        throw new TypeError(INVALID_STRING_ARGUMENT);
    }

    if (value.length === 0) {
        return '';
    }

    return value.charAt(0).toUpperCase() + (restToLowerCase ? value.slice(1).toLowerCase() : value.slice(1));
}
