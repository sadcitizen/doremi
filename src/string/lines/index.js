import { INVALID_STRING_ARGUMENT } from '../../constants/errors';
import isString from '../../common/is-string';

/**
 * Creates an array with the lines of the given string.
 *
 * @memberOf string
 * @param {string} value The string to split.
 * @returns {Array} The array of lines.
 */
export default function (value) {
    if (!isString(value)) {
        throw new TypeError(INVALID_STRING_ARGUMENT);
    }

    if (value.length === 0) {
        return [''];
    }

    return value.split(/\r?\n/g);
}
