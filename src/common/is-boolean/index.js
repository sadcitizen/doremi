/**
 * Checks if the given value is a boolean.
 *
 * @category common
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the value is boolean, else 'false'.
 */
export default value => Object.prototype.toString.call(value) === '[object Boolean]';
