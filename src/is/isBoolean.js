import type from './type';

/**
 * Checks if `target` is boolean.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Return `true` if `target` is boolean, else `false`.
 *
 * @example
 *
 * isBoolean(true);
 * // => true
 *
 * isBoolean('');
 * // => false
 */

export default target => type(target) === 'boolean';