import { INVALID_ARRAY_FIRST_ARGUMENT, INVALID_FUNCTION_SECOND_ARGUMENT } from '../../constants/errors';
import isFunction from '../../common/is-function';
import identity from '../../func/identity';
import ternary from '../../logic/ternary';

/**
 * Sorts the elements of the given array.
 *
 * @memberOf array
 * @param {Array} array The array to sort.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @return {Array} Returns sorted array.
 */
export default function (array, iteratee = identity) {
    if (!Array.isArray(array)) {
        throw new TypeError(INVALID_ARRAY_FIRST_ARGUMENT);
    }

    if (!isFunction(iteratee)) {
        throw new TypeError(INVALID_FUNCTION_SECOND_ARGUMENT);
    }

    return array.sort((left, right) => {
        const l = iteratee(left);
        const r = iteratee(right);

        return ternary(l < r, -1, ternary(l > r, 1, 0));
    });
}
