import { INVALID_ARRAY_FIRST_ARGUMENT, INVALID_FUNCTION_SECOND_ARGUMENT } from '../../constants/errors';
import isFunction from '../../common/is-function';
import identity from '../../func/identity';

/**
 * Groups the elements of the array by key. The key can be resolved by `iteratee`.
 *
 * @memberOf array
 * @param {Array} array
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @return {Object}
 */
export default function (array, iteratee = identity) {
    if (!Array.isArray(array)) {
        throw new TypeError(INVALID_ARRAY_FIRST_ARGUMENT);
    }

    if (!isFunction(iteratee)) {
        throw new TypeError(INVALID_FUNCTION_SECOND_ARGUMENT);
    }

    const result = {};
    let key;

    array.forEach(el => {
        key = iteratee(el);

        if (!result[key]) {
            result[key] = [];
        }

        result[key].push(el);
    });

    return result;
}
