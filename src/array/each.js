/**
 * Iterates over elements of `target` invoking `fn` with context 'ctx' for each element.
 *
 * @param target {Array} The array to iterate over.
 * @param fn {Function} The function invoked per iteration.
 * @param ctx {*} The context of `fn` function.
 * @returns {Array} Returns 'target'.
 *
 * @example
 *
 * each([1, 2, 3, 4, 5], console.log);
 * // => 1
 * // => 2
 * // => 3
 * // => 4
 * // => 5
 */
function each(target, fn, ctx) {
    for (var i = 0, length = target.length; i < length; i++) {
        if (fn.call(ctx, target[i], i, target) === false) {
            break;
        }
    }

    return target;
}

export default each;