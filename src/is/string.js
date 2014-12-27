var type = require('./type');

/**
 * Checks if `target` is string.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is string, else 'false'.
 *
 * @example
 *
 * is.string(false);
 * // => false
 *
 * is.string(42);
 * // => false
 *
 * is.string('42');
 * // => true
 */
module.exports = function string(target) {
    return type(target) === 'string';
};