var type = require('./type');

/**
 * Checks if `target` is date.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is date, else 'false'.
 *
 * @example
 *
 * is.date('2014-11-22');
 * // => false
 *
 * is.date(new Date());
 * // => true
 */
module.exports = function date(target) {
    return type(target) === 'date';
};