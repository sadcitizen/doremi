import findLastIndex from '../find-last-index';

/**
 * Returns the last element in a given array that satisfies the provided testing function.
 * Otherwise, it returns null, indicating no element passed the test.
 *
 * @memberOf array
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The testing function invoked per iteration.
 * @param {*} [context=null] The context of invocation.
 * @returns {number} Returns the last element.
 */
export default function (array, predicate, context = null) {
    const index = findLastIndex(array, predicate, context);

    return index === -1
        ? null
        : array[index];
}
