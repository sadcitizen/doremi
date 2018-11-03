/**
 * Returns a copy of the given date.
 *
 * @memberOf date
 * @param {Date} value The value to clone.
 * @returns {Date} Returns the cloned date.
 */
export default value => new Date(value.valueOf());
