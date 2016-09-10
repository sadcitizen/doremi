import type from './type';

/**
 * Checks if `target` is NaN.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is NaN, else 'false'.
 *
 * @example
 *
 * isNan('NaN');
 * // => false
 *
 * isNan(NaN);
 * // => true
 *
 * isNan('42');
 * // => false
 */
export default target => type(target) === 'nan';