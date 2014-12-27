var number = require('./number');

/**
 * Checks if `target` is float.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is float, else 'false'.
 *
 * @example
 *
 * is.float(42);
 * // => false
 *
 * is.float(42.42);
 * // => true
 *
 * is.float('42.42');
 * // => false
 */
module.exports = function float(target) {
    return number(target) && target % 1 !== 0;
};
