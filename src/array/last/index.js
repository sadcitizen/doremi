import { INVALID_ARRAY_FIRST_ARGUMENT } from '../../constants/errors';

/**
 * Returns new array with last `length` elements of the given array.
 *
 * @memberOf array
 * @param {Array} value The array to query.
 * @param {number} length The length of elements.
 * @returns {Array} Returns the new array.
 */
export default function (value, length = 1) {
    if (!Array.isArray(value)) {
        throw new TypeError(INVALID_ARRAY_FIRST_ARGUMENT);
    }

    if (length > 0) {
        return value.slice(value.length > length ? value.length - length : 0);
    }

    return [];
}
