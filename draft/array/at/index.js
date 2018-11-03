import flatten from '../flatten';

/**
 * Returns an array of elements corresponding to the given indexes.
 *
 * @memberOf array
 * @param {Array} array
 * @param {...Array|Array} indexes
 * @returns {Array}
 *
 * @immutable
 */
export default function (array, ...indexes) {
    const flattenIndexes = flatten(indexes);

    if (flattenIndexes.length > 0) {
        return flattenIndexes.map(value => array[value < 0 ? array.length + value : value]);
    }

    return [];
}
