/**
 * @param {*} value The value to check.
 * @returns {boolean} Returns true if the value is date, false otherwise.
 */
export default value => Object.prototype.toString.call(value) === '[object Date]';
