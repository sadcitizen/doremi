import identity from '../../func/identity';

/**
 * Sorts the array.
 *
 * @param {Array} target The array to sort.
 * @param {Function} [iteratee] The iteratees to sort by.
 * @return {Array} Returns the sorted array.
 *
 * @example
 * sortBy(['Moscow', 'Tokyo', 'New York', 'Amsterdam'], x => x.length);
 * // => ['Tokyo', 'Moscow', 'New York', 'Amsterdam']
 */
export default function (target, iteratee = identity) {
    return target.sort((left, right) => {
        const l = iteratee(left);
        const r = iteratee(right);

        return l < r ? -1 : (l > r ? 1 : 0);
    });
}
