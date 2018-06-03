/**
 * Appends items of an array to the end of other.
 *
 * @param {Array} target
 * @param {...Array} sources
 * @returns {Array}
 *
 * @example
 * const foo = [3, 6, 9, 12];
 * const bar = [4, 7, 10, 13];
 *
 * append(foo, bar);
 * // => [3, 6, 9, 12, 4, 7, 10, 13]
 */
export default function (target, ...sources) {
    if (sources.length === 0) {
        return target;
    }

    if (sources.length === 1) {
        target.push(...sources[0]);

        return target;
    }

    sources.forEach(source => {
        target.push(...source);
    });

    return target;
}
