var type = require('./type');

/**
 * Check if `target` is function.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Return `true` if `target` is function, else `false`.
 *
 * @example
 *
 * is.fn(null);
 * // => false
 *
 * function noop() {}
 * is.fn(noop);
 * // => true
 *
 * is.fn(Math.abs);
 * // => true
 */
module.exports = function fn(target) {
    return type(target) === 'function';
};