import flatten from '../flatten';

/**
 * Returns an array of elements corresponding to the given indexes.
 *
 * @category array
 * @param {Array} array
 * @param {...Array|Array} indexes
 * @returns {Array}
 *
 * @immutable
 */
export default function (array, ...indexes) {
    const flattenIndexes = flatten(indexes);

    if (flattenIndexes.length > 0) {
        return flattenIndexes.map(value => value[value < 0 ? value.length + value : value]);
    }

    return [];
}
