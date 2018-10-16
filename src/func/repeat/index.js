/**
 * Invokes the given `fn` function `times` times. Each invocation of `fn` is called with an index argument.
 *
 * @category func
 * @param {Function} fn The function to invoke.
 * @param {number} times The number of times to invoke.
 * @param {*} [ctx] The context of invocation.
 */
export default function (fn, times, ctx = null) {
    let i = 0;

    while (i < times && fn.call(ctx, i) !== false) { // undefined !== false
        i += 1;
    }
}
