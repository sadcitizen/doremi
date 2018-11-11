/**
 * Checks if the given value is a regular expression.
 *
 * @memberOf common
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the value is a regular expression, else 'false'.
 */
export default value => Object.prototype.toString.call(value) === '[object RegExp]';
