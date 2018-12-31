import { UNDEF } from '../../constants';
import { INVALID_ARRAY_ARGUMENT } from '../../constants/errors';

/**
 * Checks if the given value is non empty array.
 *
 * @memberOf array
 * @param {Array} value The array to check.
 * @returns {boolean} Returns `true` if the given value is non empty array, `false` otherwise.
 */
export default function (value) {
    if (value === null || value === UNDEF) {
        return false;
    }

    if (!Array.isArray(value)) {
        throw new TypeError(INVALID_ARRAY_ARGUMENT);
    }

    return value.length > 0;
}
