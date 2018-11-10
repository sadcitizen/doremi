/**
 * Checks if the given value is a Symbol primitive,.
 *
 * @memberOf common
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the value is a Symbol primitive, else 'false'.
 */
export default value => Object.prototype.toString.call(value) === '[object Symbol]';
