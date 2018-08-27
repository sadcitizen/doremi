/**
 * @param {Array} value
 * @param {...Array} sources
 * @returns {Array}
 *
 * @immutable
 */
export default function (value, ...sources) {
    return [].concat(...sources.reverse()).concat(value);
}
