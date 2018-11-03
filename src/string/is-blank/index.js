import { INVALID_STRING_ARGUMENT } from '../../constants/errors';
import trim from '../trim';
import isString from '../../common/is-string';

/**
 * Checks if the given string is a blank string.
 *
 * @memberOf string
 * @param {string} value The value to check.
 * @returns {boolean} Returns `true` if the given string is a blank string, else 'false'.
 */
export default function (value) {
    if (!isString(value)) {
        throw new TypeError(INVALID_STRING_ARGUMENT);
    }

    return trim(value).length === 0;
}
