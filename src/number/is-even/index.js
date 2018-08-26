import isInteger from '../is-integer';

/**
 * Checks if the given number is even.
 *
 * @category number
 * @param {number} value The value to check.
 * @returns {boolean} Returns `true` if the value is even, else `false`.
 */
export default value => isInteger(value) && value % 2 === 0;
