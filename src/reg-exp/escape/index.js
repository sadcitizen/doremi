import { INVALID_STRING_ARGUMENT } from '../../constants/errors';
import isString from '../../common/is-string';

/**
 * Escapes regular expression tokens in the given string.
 *
 * @memberOf regExp
 * @param value {string} The string to escape.
 * @returns {string} Returns the escaped string.
 */
export default function (value) {
    if (!isString(value)) {
        throw new TypeError(INVALID_STRING_ARGUMENT);
    }

    return value.replace(/([.,*+?^=!:${}()|[\]/\\])/g, '\\$&');
}
