import { INVALID_NUMBER_SECOND_ARGUMENT, INVALID_STRING_FIRST_ARGUMENT } from '../../constants/errors';
import isString from '../../common/is-string';
import isNumber from '../../common/is-number';

/**
 * Returns new string with last letter of the given string.
 * Passing `length` will return the last `length` letters of the given string.
 *
 * @memberOf string
 * @param value {string} The string to query.
 * @param length {number} The length of letters.
 * @returns {string} Returns new string with last `length` letters.
 */
export default function (value, length = 1) {
    if (!isString(value)) {
        throw new TypeError(INVALID_STRING_FIRST_ARGUMENT);
    }

    if (!isNumber(length)) {
        throw new TypeError(INVALID_NUMBER_SECOND_ARGUMENT);
    }

    if (length < 1) {
        return '';
    }

    return value.slice(value.length - length);
}
