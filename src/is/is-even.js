import isNumber from './is-number';

/**
 * Checks if `target` is an even number.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Return `true` if `target` is an even number, else `false`.
 *
 * @example
 *
 * isEven(null);
 * // => false
 *
 * isEven(21);
 * // => false
 *
 * isEven(20);
 * // => true
 */
export default target => isNumber(target) && target % 2 === 0;