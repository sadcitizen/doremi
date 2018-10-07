import { INVALID_ARRAY_FIRST_ARGUMENT } from '../../constants/errors';
import partial from '../../func/partial';
import equals from '../../logic/equals';
import includesWith from '../includes-with';

/**
 * Removes duplicates and returns unique elements from an array.
 *
 * @category array
 * @param {Array} value The array to query.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} The new array with unique elements.
 */
export default function (value, comparator = equals) {
    if (!Array.isArray(value)) {
        throw new TypeError(INVALID_ARRAY_FIRST_ARGUMENT);
    }

    const result = [];

    value.forEach(item => {
        if (!includesWith(result, partial(comparator, item))) {
            result.push(item);
        }
    });

    return result;
}
