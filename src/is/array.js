import type from './type';

/**
 * Check if `target` is array.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is array, else `false`.
 *
 * @example
 *
 * is.array([]);
 * // => true
 *
 * is.array(42);
 * // => false
 */
function array(target) {
    return type(target) === 'array';
}

export default Array.isArray || array;