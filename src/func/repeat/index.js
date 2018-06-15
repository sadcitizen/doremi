/**
 * @param {Function} fn
 * @param {number} count
 * @param {*} [ctx]
 */
export default function (fn, count, ctx = null) {
    let i = 0;

    while (i < count && fn.call(ctx, i) !== false) { // undefined !== false
        i += 1;
    }
}
