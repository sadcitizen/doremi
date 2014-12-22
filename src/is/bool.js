var type = require('./type');

/**
 * Check if `target` is boolean.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Return `true` if `target` is boolean, else `false`.
 *
 * @example
 *
 * is.bool(true);
 * // => true
 *
 * is.bool('');
 * // => false
 */
module.exports = function bool(target) {
    return type(target) === 'boolean';
};