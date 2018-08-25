/**
 * Checks if `value` is a date.
 *
 * @category common
 * @param {*} value The value to check.
 * @returns {boolean} True if `value` is a date, else returns false.
 */
export default value => Object.prototype.toString.call(value) === '[object Date]';
