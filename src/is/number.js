var type = require('./type');

/**
 * Checks if `target` is number.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is number, else 'false'.
 *
 * @example
 *
 * is.number(false);
 * // => false
 *
 * is.number(42);
 * // => true
 *
 * is.number('42');
 * // => false
 */
module.exports = function number(target) {
    return type(target) === 'number';
};