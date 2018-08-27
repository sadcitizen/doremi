import identity from '../../func/identity';

/**
 * @param {Array} value
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @return {Object}
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
