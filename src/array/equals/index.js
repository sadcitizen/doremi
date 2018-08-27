const defaultComparator = (value, other) => value === other;

/**
 * Checks if the arrays contain the same elements.
 *
 * @category array
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} [comparator] The comparator invoked per element.
 * @return {Boolean} Returns `true` if the arrays contain the same elements, else `false`.
 */
export default function (array, other, comparator = defaultComparator) {
    if (array.length !== other.length) {
        return false;
    }

    return array.every((el, i) => comparator(el, other[i]));
}
