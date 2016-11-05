import isString from '../is-string';

/**
 * Checks if `target` is an empty string.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is an empty string, else 'false'.
 *
 * @example
 *
 * isEmpty('');
 * // => true
 *
 * isEmpty('{"a":"b","c":"d"}');
 * // => false
 *
 * isEmpty('     \t    \n ');
 * // => false
 */
export default target => isString(target) && target.length === 0;
