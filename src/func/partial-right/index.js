/**
 * @param {Function} fn
 * @param {...*} args
 * @returns {Function}
 */
export default (fn, ...args) => (...partialArgs) => fn(...partialArgs, ...args);
