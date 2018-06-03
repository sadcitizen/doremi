import identity from '../../func/identity';
import ternary from '../../logic/ternary';

/**
 * Sorts the array.
 *
 * @param {Array} target The array to sort.
 * @param {Function} [iteratee] The iteratees to sort by.
 * @return {Array} Returns the sorted array.
 *
 * @example
 * sort(['Moscow', 'Tokyo', 'New York', 'Amsterdam'], x => x.length);
 * // => ['Tokyo', 'Moscow', 'New York', 'Amsterdam']
 */
export default function (target, iteratee = identity) {
    return target.sort((left, right) => {
        const l = iteratee(left);
        const r = iteratee(right);

        return ternary(l < r, -1, ternary(l > r, 1, 0));
    });
}
