import { INVALID_ARRAY_FIRST_ARGUMENT } from '../../constants/errors';

/**
 * Returns an array of two arrays.
 * The first array is elements that return true for the predicate function.
 * The second array is elements that return false for the predicate function.
 *
 * @memberOf array
 * @param {Array} value The array to split.
 * @param {BooleanConstructor|Function} [predicate] The function invoked per iteration.
 * @param {*} [ctx] The context of predicate.
 * @returns {Array} Returns new array of two arrays.
 */
export default function (value, predicate = Boolean, ctx = null) {
    if (!Array.isArray(value)) {
        throw new TypeError(INVALID_ARRAY_FIRST_ARGUMENT);
    }

    const pass = [];
    const fail = [];

    value.forEach((item, index) => (predicate.call(ctx, item, index, value) ? pass : fail).push(item));

    return [pass, fail];
}
