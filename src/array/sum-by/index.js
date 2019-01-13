import { INVALID_ARRAY_FIRST_ARGUMENT, INVALID_FUNCTION_SECOND_ARGUMENT } from '../../constants/errors';
import identity from '../../func/identity';
import isFunction from '../../common/is-function';

/**
 * Sums all values in the array produced by `iteratee` applied to each element in the array.
 *
 * @memberOf array
 * @param {Array} array The array to sum.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @return {number} Returns the sum of all values.
 */
export default function (array, iteratee = identity) {
    if (!Array.isArray(array)) {
        throw new TypeError(INVALID_ARRAY_FIRST_ARGUMENT);
    }

    if (!isFunction(iteratee)) {
        throw new TypeError(INVALID_FUNCTION_SECOND_ARGUMENT);
    }

    if (array.length === 0) {
        return 0;
    }

    if (array.length === 1) {
        return iteratee(array[0]);
    }

    return array.reduce((total, current) => total + iteratee(current), 0);
}
