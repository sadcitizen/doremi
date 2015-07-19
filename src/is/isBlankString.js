import whitespaces from '../internal/whitespaces.regex';
import isString from './string';

var WHITESPACES_REGEX = new RegExp('^[' + whitespaces + ']*$');

/**
 * Checks if `target` is a blank string.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is a blank string, else 'false'.
 *
 * @example
 *
 * isBlankString('');
 * // => true
 *
 * isBlankString('{"a":"b","c":"d"}');
 * // => false
 *
 * isBlankString('     \t    \n ');
 * // => true
 */
export default target => isString(target) && WHITESPACES_REGEX.test(target);