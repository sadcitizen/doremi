/* eslint-disable no-plusplus */
import { INVALID_ARRAY_FIRST_ARGUMENT, INVALID_FUNCTION_SECOND_ARGUMENT } from '../../constants/errors';
import { isFunction } from '../../common';

/**
 * Returns the index of the last element in a given array that satisfies the provided testing function.
 * Otherwise, it returns -1, indicating no element passed the test.
 *
 * @memberOf array
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The testing function invoked per iteration.
 * @param {*} [context=null] The context of invocation.
 * @returns {number} Returns the index of the last element.
 */
export default function (array, predicate, context = null) {
    if (!Array.isArray(array)) {
        throw new TypeError(INVALID_ARRAY_FIRST_ARGUMENT);
    }

    if (!isFunction(predicate)) {
        throw new TypeError(INVALID_FUNCTION_SECOND_ARGUMENT);
    }

    for (let i = array.length; i >= 0; i--) {
        if (predicate.call(context, array[i], i, array)) {
            return i;
        }
    }

    return -1;
}
/* eslint-enable no-plusplus */
