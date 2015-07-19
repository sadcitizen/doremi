import type from './type';

/**
 * Checks if `target` is classified as an `arguments`.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is classified as an `arguments`, else `false`.
 *
 * @example
 * function fn() {
 *   return arguments;
 * }
 * isArguments(fn());
 * // => true
 *
 * isArguments(1, 2, 3);
 * // => false
 */
export default target => type(target) === 'arguments';