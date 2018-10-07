import { INVALID_ARRAY_ARGUMENT } from '../../constants/errors';
import isDefined from '../../common/is-defined';

/**
 * Returns a copy of the given array without any `null` or `undefined` values.
 *
 * @category array
 * @param {Array} value The array to inspect.
 * @returns {Array} Return new array without `null` or `undefined`.
 */
export default function (value) {
    if (!Array.isArray(value)) {
        throw new TypeError(INVALID_ARRAY_ARGUMENT);
    }

    return value.filter(isDefined);
}
