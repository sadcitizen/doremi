/**
 * @param {Function} fn
 * @param {Array} args
 * @returns {Function}
 */
export default (fn, ...args) => (...partialArgs) => fn(...args, ...partialArgs);
