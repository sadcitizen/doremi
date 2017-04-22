import identity from '../../func/identity';

/**
 * Counts the elements of the array by key.
 *
 * @param {Array} value The array to count.
 * @param {Function} [iteratee] The iteratee to resolve keys.
 * @return {Object} Returns object with counts of elements.
 *
 * @example
 * countBy([1, 2, 3, 3, 2, 4]);
 * // => { '1': 1, '2': 2, '3': 2, '4': 1 }
 */
export default function (value, iteratee = identity) {
    const result = {};
    let key;

    value.forEach(el => {
        key = iteratee(el);

        if (!result[key]) {
            result[key] = 0;
        }

        result[key] += 1
    });

    return result;
}
