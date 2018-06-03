import flatten from '../flatten';

/**
 * @param {Array} target
 * @param {...Array|Array} indexes
 * @returns {Array}
 *
 * @immutable
 */
export default function (target, ...indexes) {
    const flattenIndexes = flatten(indexes);

    if (flattenIndexes.length > 0) {
        return flattenIndexes.map(value => target[value < 0 ? target.length + value : value]);
    }

    return [];
}
