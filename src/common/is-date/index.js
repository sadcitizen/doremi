/**
 * Checks if the given value is a date.
 *
 * @memberOf common
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the value is a date, else `false`.
 */
export default value => Object.prototype.toString.call(value) === '[object Date]';
