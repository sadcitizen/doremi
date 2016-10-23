/**
 * Checks if `target` is function.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Return `true` if `target` is function, else `false`.
 *
 * @example
 *
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
export default target => Object.prototype.toString.call(target) === '[object Function]';
