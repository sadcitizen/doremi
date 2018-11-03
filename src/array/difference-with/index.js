import { INVALID_ARRAY_FIRST_ARGUMENT, INVALID_ARRAY_SECOND_ARGUMENT } from '../../constants/errors';
import partial from '../../func/partial';
import equals from '../../logic/equals';
import includesWith from '../includes-with';

/**
 * Creates new array of elements of the first array that are not present in the second array.
 *
 * @memberOf array
 * @param {Array} value The first array to inspect.
 * @param {Array} other The second array to inspect.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns new array of filtered elements of first array.
 */
export default function (value, other, comparator = equals) {
    if (!Array.isArray(value)) {
        throw new TypeError(INVALID_ARRAY_FIRST_ARGUMENT);
    }

    if (!Array.isArray(other)) {
        throw new TypeError(INVALID_ARRAY_SECOND_ARGUMENT);
    }

    return value.filter(item => !includesWith(other, partial(comparator, item)));
}
