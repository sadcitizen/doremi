var type = require('./type');

/**
 * Checks if `target` is classified as an `arguments`.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is classified as an `arguments`, else `false`.
 *
 * @example
 * function fn() {
 *   return arguments;
 * }
 * is.args(fn());
 * // => true
 *
 * is.args(1, 2, 3);
 * // => false
 */
module.exports = function args(target) {
    return type(target) === 'arguments';
};