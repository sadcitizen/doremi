import { INVALID_ARRAY_FIRST_ARGUMENT, INVALID_ARRAY_SECOND_ARGUMENT } from '../../constants/errors';
import equals from '../../logic/equals';
import uniqueWith from '../unique-with';

/**
 * Unites the arrays.
 *
 * @memberOf array
 * @param {Array} value The first array to unite.
 * @param {Array} other The second array to unite.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {*[]} Returns the new array of united elements.
 */
export default function (value, other, comparator = equals) {
    if (!Array.isArray(value)) {
        throw new TypeError(INVALID_ARRAY_FIRST_ARGUMENT);
    }

    if (!Array.isArray(other)) {
        throw new TypeError(INVALID_ARRAY_SECOND_ARGUMENT);
    }

    return uniqueWith([...value, ...other], comparator);
}
