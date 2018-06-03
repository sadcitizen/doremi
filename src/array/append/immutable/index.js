/**
 * @param {Array} value
 * @param {...Array} sources
 * @returns {Array}
 *
 * @immutable
 */
export default function (value, ...sources) {
    return [].concat(value, ...sources);
}
