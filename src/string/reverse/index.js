import { INVALID_STRING_ARGUMENT } from '../../constants/errors';
import isString from '../../common/is-string';

/**
 * Reverses a string.
 *
 * @memberOf string
 * @param {string} value The string to reverse.
 * @returns {string} Returns the reversed string.
 */
export default function (value) {
    if (!isString(value)) {
        throw new TypeError(INVALID_STRING_ARGUMENT);
    }

    return value.split('').reverse().join('');
}
