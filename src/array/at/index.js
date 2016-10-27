/**
 * Returns an array of elements corresponding to the given indexes.
 *
 * @param target {Array} The array to iterate over.
 * @param indexes {Array} The indexes of elements to pick.
 * @returns {*|Array} The array of elements.
 *
 * @example
 * at([1, 2, 3, 4, 5], 1);
 * // => 2
 *
 * at([1, 2, 3, 4, 5], 1, 3);
 * // => [2, 4]
 *
 * at([1, 2, 3, 4, 5], [-1, -2, 0]);
 * // => [5, 4, 1]
 */
function at(target, ...indexes) {
    let index;

    if (indexes.length === 1) {
        index = indexes[0];

        if (Array.isArray(index)) {
            return index.map(x => at(target, x));
        }

        return target[index < 0 ? target.length + index : index];
    }

    if (indexes.length > 1) {
        return indexes.map(x => at(target, x));
    }
}

export default at;
