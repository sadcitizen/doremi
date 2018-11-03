/**
 * Checks if the given value is a function.
 *
 * @memberOf common
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the value is function, else `false`.
 */
export default value => Object.prototype.toString.call(value) === '[object Function]';
