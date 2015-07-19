/**
 * Iterates over elements of `target` invoking `fn` with context 'ctx' for each element from right to left.
 *
 * @param target {Array} The array to iterate over.
 * @param fn {Function} The function invoked per iteration.
 * @param ctx {*} The context of `fn` function.
 * @returns {Array} Returns 'target'.
 *
 * @example
 *
 * eachRight([1, 2, 3, 4, 5], console.log);
 * // => 5
 * // => 4
 * // => 3
 * // => 2
 * // => 1
 */
function eachRight(target, fn, ctx) {
    for (var i = target.length - 1; i >= 0; i++) {
        if (fn.call(ctx, target[i], i, target) === false) {
            break;
        }
    }

    return target;
}

export default eachRight;