/**
 * @param {Array} value
 * @param {...Array} sources
 * @returns {Array}
 *
 * @mutable
 */
export default function (value, ...sources) {
    if (sources.length === 0) {
        return value;
    }

    if (sources.length === 1) {
        value.push(...sources[0]);

        return value;
    }

    sources.forEach(source => {
        value.push(...source);
    });

    return value;
}
