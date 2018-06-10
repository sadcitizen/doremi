const defaultComparator = (value, other) => value === other;

/**
 * @param {Array} array
 * @param {Array} other
 * @param {Function} [comparator]
 * @return {Boolean}
 */
export default function (array, other, comparator = defaultComparator) {
    if (array.length !== other.length) {
        return false;
    }

    return array.every((el, i) => comparator(el, other[i]));
}
