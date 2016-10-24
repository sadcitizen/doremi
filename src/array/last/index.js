import slice from '../../internal/slice';

/**
 * Returns the last element of an array. Passing `count`
 * will return the last `count` elements of the array.
 *
 * @param target {Array} The array of elements.
 * @param count {number} The required count of elements.
 * @returns {*|Array} Returns elements of the array.
 *
 * @example
 *
 * last([1, 2, 3, 4, 5]);
 * // => 5
 *
 * last([1, 2, 3, 4, 5], 3);
 * // => [3, 4, 5]
 *
 * last([1, 2, 3, 4, 5], 99);
 * // => [1, 2, 3, 4, 5]
 */

function last(target, count = 1) {
    let length = target.length;

    if (count >= length) {
        return target;
    }

    if (count === 1) {
        return target[target.length - 1];
    }

    if (count > 0) {
        return slice(target, target.length - count, target.length);
    }
}

export default last;
