/**
 * Checks if a value is function.
 *
 * @param {*} fn The value to check.
 * @returns {boolean} Return `true` if the value is function, else `false`.
 *
 * @example
 * isFunction(null);
 * // => false
 *
 * function noop() {}
 * isFunction(noop);
 * // => true
 *
 * isFunction(Math.abs);
 * // => true
 */
export default fn => Object.prototype.toString.call(fn) === '[object Function]';
