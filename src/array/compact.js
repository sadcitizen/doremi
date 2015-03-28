/**
 * Returns a copy of the `target` with all falsey values removed.
 *
 * @param target The array to compact.
 * @returns {Array}
 *
 * @example
 *
 * compact([1, 2, 3]);
 * // => [1, 2, 3]
 *
 * compact([null, 1, false]);
 * // => [1]
 */

function compact(target) {
    return target.filter(Boolean);
}

export default compact;