/**
 * @param {Function} fn
 * @param {number} ms
 * @param {*} [context]
 * @returns {Function}
 */
export default (fn, ms, context = null) => (...args) => setTimeout(() => fn.apply(context, args), ms);
