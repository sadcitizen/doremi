/**
 * Checks if the given value is a string.
 *
 * @category common
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the value is string, else 'false'.
 */
export default value => Object.prototype.toString.call(value) === '[object Map]';
