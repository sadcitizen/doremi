import { INVALID_ARRAY_FIRST_ARGUMENT, INVALID_FUNCTION_SECOND_ARGUMENT } from '../../constants/errors';
import isFunction from '../../common/is-function';

/**
 * Returns the element in the array with the greatest value.
 *
 * @memberOf array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @return {*} Returns element with the greatest value.
 */
export default function (array, iteratee) {
    if (!Array.isArray(array)) {
        throw new TypeError(INVALID_ARRAY_FIRST_ARGUMENT);
    }

    if (iteratee && !isFunction(iteratee)) {
        throw new TypeError(INVALID_FUNCTION_SECOND_ARGUMENT);
    }

    if (array.length === 0) {
        return NaN;
    }

    if (array.length === 1) {
        return array[0];
    }

    if (!iteratee) {
        return Math.max(...array);
    }

    return array.reduce((prev, current) => iteratee(prev) > iteratee(current) ? prev : current, array[0]);
}
