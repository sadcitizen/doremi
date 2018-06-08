const defaultComparer = (value, other) => value === other;

/**
 * @param {Array} array
 * @param {Array} other
 * @param {Function} [comparer]
 * @return {Boolean}
 */
export default function (array, other, comparer = defaultComparer) {
    if (array.length !== other.length) {
        return false;
    }

    return array.every((el, i) => comparer(el, other[i]));
}
