/**
 * @param {Array} array
 * @param {Function} predicate
 * @param {number} [fromIndex]
 * @returns {boolean}
 */
export default function (array, predicate, fromIndex = 0) {
    return array.slice(fromIndex).findIndex(predicate) !== -1;
}
