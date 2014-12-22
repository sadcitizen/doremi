var type = require('./type');

/**
 * Check if `target` is an odd number.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Return `true` if `target` is an odd number, else `false`.
 *
 * @example
 *
 * is.odd(null);
 * // => false
 *
 * is.odd(21);
 * // => true
 *
 * is.odd(20);
 * // => false
 *
 */
module.exports = function odd(target) {
    return type(target) === 'number' && target % 2 !== 0;
};