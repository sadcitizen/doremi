/**
 * @param {*} fn The value to check.
 * @returns {boolean} Return `true` if the value is function, else `false`.
 */
export default fn => Object.prototype.toString.call(fn) === '[object Function]';
