/**
 * Returns the element in the array with the greatest value.
 *
 * @param {Array} target The array to search.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @return {*} Returns the element with the greatest value.
 *
 * @example
 * max([1, 2, 4, 3, 9, 0]);
 * // => 9
 *
 * max([{ value: 1 }, { value: 2 }, { value: 3 }], x => x.value);
 * // => { value: 3 }
 */
export default function (target, iteratee) {
    if (target.length === 0) {
        return NaN;
    }

    if (!iteratee) {
        return Math.max(...target);
    }

    let result = target[0];
    let compare = iteratee(target[0]);
    let temp;

    for (let i = 0, length = target.length; i < length; i++) {
        temp = iteratee(target[i]);

        if (temp > compare) {
            compare = temp;
            result = target[i];
        }
    }

    return result;
}
