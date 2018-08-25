/**
 * Checks if the given value is an object.
 *
 * @category common
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the value is an object, else 'false'.
 */
export default value => Object.prototype.toString.call(value) === '[object Object]';
