/**
 * @param {Array} target
 * @param {Array} indexes
 * @returns {*|Array}
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
