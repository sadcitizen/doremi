var date = require('./date');
var nan = require('./nan');

/**
 * Check if `target` is a valid date.
 *
 * @param target The value to check.
 * @returns {boolean} Returns `true` if value is a valid date, else `false`.
 *
 * @example
 *
 * is.validDate('');
 * // => false
 *
 * is.validDate(new Date());
 * // => true
 *
 * is.validDate(new Date('date'));
 * // => false
 */
module.exports = function validDate(target) {
    return date(target) && !nan(target.getTime());
};