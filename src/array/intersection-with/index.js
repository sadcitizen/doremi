import { INVALID_ARRAY_FIRST_ARGUMENT, INVALID_ARRAY_SECOND_ARGUMENT } from '../../constants/errors';
import equals from '../../logic/equals';
import includesWith from '../includes-with';
import partial from '../../func/partial';

/**
 * Creates new array of intersecting elements of the given arrays.
 *
 * @category array
 * @param {Array} value The first array to inspect.
 * @param {Array} other The second array to inspect.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns new array of intersecting elements.
 */
export default function (value, other, comparator = equals) {
    if (!Array.isArray(value)) {
        throw new TypeError(INVALID_ARRAY_FIRST_ARGUMENT);
    }

    if (!Array.isArray(other)) {
        throw new TypeError(INVALID_ARRAY_SECOND_ARGUMENT);
    }

    const result = [];

    value.forEach(item => {
        if (includesWith(other, partial(comparator, item))) {
            result.push(item);
        }
    });

    return result;
}
