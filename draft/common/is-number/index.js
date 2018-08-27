/**
 * Checks if the given value is a number.
 *
 * @category common
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the value is a number, else `false`.
 */
export default value => Object.prototype.toString.call(value) === '[object Number]';
