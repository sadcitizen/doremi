import identity from '../../func/identity';

/**
 * @param {Array} array
 * @param {Function} [iteratee]
 * @return {Object}
 *
 * @immutable
 */
export default function (array, iteratee = identity) {
    const result = {};
    let key;

    array.forEach(el => {
        key = iteratee(el);

        if (!result[key]) {
            result[key] = 0;
        }

        result[key] += 1;
    });

    return result;
}
