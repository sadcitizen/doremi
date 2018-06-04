/**
 * @param {*} value
 * @returns {boolean}
 */
export default value => Object.prototype.toString.call(value) === '[object Date]';
