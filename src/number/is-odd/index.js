import isInteger from '../is-integer';

/**
 * Checks if the given value is an odd number.
 *
 * @memberOf number
 * @param {number} value The value to check.
 * @returns {boolean} Returns `true` if the value is odd number, else `false`.
 */
export default value => isInteger(value) && value % 2 !== 0;
