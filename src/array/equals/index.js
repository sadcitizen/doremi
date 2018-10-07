import { INVALID_ARRAY_FIRST_ARGUMENT, INVALID_ARRAY_SECOND_ARGUMENT } from '../../constants/errors';

const defaultComparator = (value, other) => value === other;

/**
 * Checks if the arrays contain the same elements.
 *
 * @category array
 * @param {Array} value The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} [comparator] The comparator invoked per element.
 * @return {Boolean} Returns `true` if the arrays contain the same elements, else `false`.
 */
export default function (value, other, comparator = defaultComparator) {
    if (!Array.isArray(value)) {
        throw new TypeError(INVALID_ARRAY_FIRST_ARGUMENT);
    }

    if (!Array.isArray(other)) {
        throw new TypeError(INVALID_ARRAY_SECOND_ARGUMENT);
    }

    if (value.length !== other.length) {
        return false;
    }

    return value.every((el, i) => comparator(el, other[i]));
}
