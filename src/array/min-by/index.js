import { INVALID_ARRAY_FIRST_ARGUMENT } from '../../constants/errors';

/**
 * Returns the element in the array with the lowest value.
 *
 * @memberOf array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @return {*} Returns element with the lowest value.
 */
export default function (array, iteratee) {
    if (!Array.isArray(array)) {
        throw new TypeError(INVALID_ARRAY_FIRST_ARGUMENT);
    }

    if (array.length === 0) {
        return NaN;
    }

    if (array.length === 1) {
        return array[0];
    }

    if (!iteratee) {
        return Math.min(...array);
    }

    return array.reduce((prev, current) => iteratee(prev) < iteratee(current) ? prev : current, array[0]);
}
