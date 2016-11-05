/**
 * Returns the first element of an array. Passing `count`
 * will return the first `count` elements of the array.
 *
 * @param target {Array} The array of elements.
 * @param count {number} The required count of elements.
 * @returns {*|Array} Returns elements of the array.
 *
 * @example
 *
 * first([1, 2, 3, 4, 5]);
 * // => 1
 *
 * first([1, 2, 3, 4, 5], 3);
 * // => [1, 2, 3]
 *
 * first([1, 2, 3, 4, 5], 99);
 * // => [1, 2, 3, 4, 5]
 */

function first(target, count = 1) {
    if (count > 0) {
        return count === 1 ? target[0] : target.slice(0, count);
    }
}

export default first;
