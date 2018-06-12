/**
 * @param {*} value
 * @param {*} other
 * @returns {boolean}
 */
export default (value, other) => value === other || (value !== value && other !== other); // eslint-disable-line no-self-compare
