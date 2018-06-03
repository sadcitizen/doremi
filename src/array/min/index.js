/**
 * Returns the element in the array with the lowest value.
 *
 * @param {Array} target The array to search.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @return {*} Returns the element with the lowest value.
 *
 * @example
 * min([1, 2, 4, 3, 9, 0]);
 * // => 0
 *
 * min([{ value: 1 }, { value: 2 }, { value: 3 }], x => x.value);
 * // => { value: 1 }
 */
export default function (target, iteratee) {
    if (target.length === 0) {
        return NaN;
    }

    if (!iteratee) {
        return Math.min(...target);
    }

    let [result] = target;
    let compare = iteratee(target[0]);
    let temp;

    for (let i = 0, { length } = target; i < length; i += 1) {
        temp = iteratee(target[i]);

        if (temp < compare) {
            compare = temp;
            result = target[i];
        }
    }

    return result;
}
