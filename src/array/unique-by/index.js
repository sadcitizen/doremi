import identity from '../../func/identity';

/**
 * @param {Array} array
 * @param {Function} [iteratee]
 * @returns {Array}
 */
export default function (array, iteratee = identity) {
    const result = [];
    const seen = [];

    array.forEach(value => {
        const comparable = iteratee(value);

        if (!seen.includes(comparable)) {
            result.push(value);
            seen.push(comparable);
        }
    });

    return result;
}
