/**
 * Checks if the value is equal to the other value.
 *
 * @category logic
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the value is equal to the other value, `false` otherwise.
 */
export default (value, other) => value === other || (value !== value && other !== other); // eslint-disable-line no-self-compare
