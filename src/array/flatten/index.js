/**
 *
 * @memberOf array
 * @param {Array} array
 * @param {boolean} isDeep
 * @returns {Array}
 */
function flatten(array, isDeep = true) {
    if (!Array.isArray(array)) {
        return [];
    }

    return array.reduce((acc, value) => acc.concat(isDeep && Array.isArray(value) ? flatten(value) : value), []);
}

export default flatten;
