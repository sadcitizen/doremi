/**
 * Checks if `target` is date.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is date, else 'false'.
 *
 * @example
 *
 * isDate('2014-11-22');
 * // => false
 *
 * isDate(new Date());
 * // => true
 */
export default target => Object.prototype.toString.call(target) === '[object Date]';
