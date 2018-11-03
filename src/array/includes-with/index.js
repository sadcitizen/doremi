import { INVALID_ARRAY_FIRST_ARGUMENT } from '../../constants/errors';

/**
 * Checks if the given array includes elements for which `predicate` returns `true`.
 *
 * @memberOf array
 * @param {Array} value The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} [fromIndex] The index to search from.
 * @returns {boolean}
 */
export default function (value, predicate, fromIndex = 0) {
    if (!Array.isArray(value)) {
        throw new TypeError(INVALID_ARRAY_FIRST_ARGUMENT);
    }

    return value.slice(fromIndex).findIndex(predicate) !== -1;
}
