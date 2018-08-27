/**
 * @param {Function} fn
 * @return {Function}
 */
export default fn => (...args) => !fn(...args);
