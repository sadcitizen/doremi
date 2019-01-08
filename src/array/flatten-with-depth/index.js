/**
 *
 * @memberOf array
 * @param {Array} array
 * @param {number} [depth]
 * @returns {Array}
 */
function flatten(array, depth = 1) {
    if (!Array.isArray(array)) {
        return [];
    }

    return array.reduce((acc, value) => acc.concat(depth > 1 && Array.isArray(value) ? flatten(value, depth - 1) : value), []);
}

export default flatten;
