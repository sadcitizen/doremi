const defaultComparer = (value, other) => value === other;

/**
 * Checks if the arrays contain the same elements
 * @param {Array} value The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} [comparer] The custom compare function.
 * @return {Boolean} Returns `true` if the arrays contain the same elements, else `false`.
 *
 * @example
 * equals([1, 2, 3, 4], [1, 2, 3, 4]);
 * // => true
 *
 * equals([1, 2, 3, 4], [5, 6, 7, 8]);
 * // => false
 */
export default function (value, other, comparer = defaultComparer) {
    if (value.length !== other.length) {
        return false;
    }

    return value.every((el, i) => comparer(el, other[i]));
}
