/**
 * @param {Array} array
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @return {*}
 */
export default function (array, iteratee) {
    if (array.length === 0) {
        return NaN;
    }

    if (!iteratee) {
        return Math.max(...array);
    }

    const { length } = array;
    let [result] = array;
    let compare = iteratee(result);
    let temp;

    for (let i = 0; i < length; i += 1) {
        temp = iteratee(array[i]);

        if (temp > compare) {
            compare = temp;
            result = array[i];
        }
    }

    return result;
}
