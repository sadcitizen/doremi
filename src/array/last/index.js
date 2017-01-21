/**
 * Returns the last element of an array. Passing `count`
 * will return the last `count` elements of the array.
 *
 * @param target {Array} The array of elements.
 * @param count {number} The required count of elements.
 * @returns {*|Array} Returns elements of the array.
 *
 * @example
 * last([1, 2, 3, 4, 5]);
 * // => 5
 *
 * last([1, 2, 3, 4, 5], 3);
 * // => [3, 4, 5]
 *
 * last([1, 2, 3, 4, 5], 99);
 * // => [1, 2, 3, 4, 5]
 */

export default function (target, count = 1) {
    if (count === 1) {
        return target[target.length - 1];
    }

    if (count > 0) {
        return target.slice(target.length - count);
    }
}
