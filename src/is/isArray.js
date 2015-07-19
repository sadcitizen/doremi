import type from './type';

/**
 * Check if `target` is array.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is array, else `false`.
 *
 * @example
 *
 * isArray([]);
 * // => true
 *
 * isArray(42);
 * // => false
 */
const isArray = target => type(target) === 'array';

export default Array.isArray || isArray;