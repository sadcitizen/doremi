/**
 * Checks if the given value is an instance of `Set`.
 *
 * @memberOf common
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the value is an instance of `Set`, else 'false'.
 */
export default value => Object.prototype.toString.call(value) === '[object Set]';
