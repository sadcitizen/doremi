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
 * is.args(fn());
 * // => true
 *
 * is.args(1, 2, 3);
 * // => false
 */
function args(target) {
    return type(target) === 'arguments';
}

export default args;