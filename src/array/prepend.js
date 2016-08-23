/**
 * Adds items of an array to the beginning of other.
 *
 * @param target {Array} The array to modify.
 * @param source {Array} The array to prepend.
 * @returns {*} {Array} Returns `target` with prepended items of `source`.
 *
 * @example
 * const foo = [3, 6, 9, 12];
 * const bar = [4, 7, 10, 13];
 * prepend(foo, bar);
 * // => [4, 7, 10, 13, 3, 6, 9, 12]
 */

function append(target, source) {
    target.unshift.apply(target, source);
    return target;
}

export default append;