import identity from '../../func/identity';

/**
 * Groups the elements of the array by key.
 *
 * @param {Array} value The array to group.
 * @param {Function} [iteratee] The iteratee to resolve keys.
 * @return {Object} Returns object with grouped elements.
 *
 * @example
 * group([1, 2, 3, 3, 2, 4]);
 * // => { '1': [1], '2': [2, 2], '3': [3, 3], '4': [4] }
 */
export default function (value, iteratee = identity) {
    const result = {};
    let key;

    value.forEach(el => {
        key = iteratee(el);

        if (!result[key]) {
            result[key] = [];
        }

        result[key].push(el);
    });

    return result;
}
