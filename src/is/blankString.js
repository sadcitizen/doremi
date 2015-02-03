import whitespaces from '../internal/whitespaces.regex';
import string from './string';

var WHITESPACES_REGEX = new RegExp('^[' + whitespaces + ']*$');

/**
 * Checks if `target` is a blank string.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is a blank string, else 'false'.
 *
 * @example
 *
 * is.blankString('');
 * // => true
 *
 * is.blankString('{"a":"b","c":"d"}');
 * // => false
 *
 * is.blankString('     \t    \n ');
 * // => true
 */
function blankString(target) {
    return string(target) && WHITESPACES_REGEX.test(target);
}

export default blankString;