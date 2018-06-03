import append from '../append';

/**
 * @param {Array} target
 * @param {boolean} deep
 * @returns {Array}
 *
 * @immutable
 */
function flatten(target, deep = true) {
    if (!Array.isArray(target)) {
        return [];
    }

    const result = [];

    target.forEach(x => Array.isArray(x) ? append(result, deep ? flatten(x, deep) : x) : result.push(x));

    return result;
}

export default flatten;
