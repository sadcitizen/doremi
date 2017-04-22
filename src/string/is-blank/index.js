import whitespaces from '../../internal/regexes/whitespaces';
import isString from '../is-string';

const WHITESPACES_REGEX = new RegExp(`^[${whitespaces}]*$`);

/**
 * Checks if `target` is a blank string.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is a blank string, else 'false'.
 *
 * @example
 *
 * isBlank('');
 * // => true
 *
 * isBlank('{"a":"b","c":"d"}');
 * // => false
 *
 * isBlank('     \t    \n ');
 * // => true
 */
export default target => isString(target) && WHITESPACES_REGEX.test(target);
