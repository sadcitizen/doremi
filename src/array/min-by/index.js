/**
 * @param {Array} array
 * @param {Function} [iteratee]
 * @return {*}
 */
export default function (array, iteratee) {
    if (array.length === 0) {
        return NaN;
    }

    if (!iteratee) {
        return Math.min(...array);
    }

    let [result] = array;
    let compare = iteratee(array[0]);
    let temp;

    for (let i = 0, { length } = array; i < length; i += 1) {
        temp = iteratee(array[i]);

        if (temp < compare) {
            compare = temp;
            result = array[i];
        }
    }

    return result;
}
