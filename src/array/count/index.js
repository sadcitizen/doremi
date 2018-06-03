import identity from '../../func/identity';

/**
 * @param {Array} value
 * @param {Function} [iteratee]
 * @return {Object}
 *
 * @immutable
 */
export default function (value, iteratee = identity) {
    const result = {};
    let key;

    value.forEach(el => {
        key = iteratee(el);

        if (!result[key]) {
            result[key] = 0;
        }

        result[key] += 1;
    });

    return result;
}
