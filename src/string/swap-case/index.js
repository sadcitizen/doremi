import { INVALID_STRING_ARGUMENT } from '../../constants/errors';
import isString from '../../common/is-string';

/**
 * Swaps case of case-based characters of the given string.
 *
 * @memberOf string
 * @param {string} value The string to swap.
 * @returns {string} Returns the swapped string.
 */
export default function (value) {
    if (!isString(value)) {
        throw new TypeError(INVALID_STRING_ARGUMENT);
    }

    if (value.length === 0) {
        return '';
    }

    return value.replace(/\S/g, char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase());
}
