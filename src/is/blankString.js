var whitespaces = require('../internal/whitespaces.regex');
var WHITESPACES_REGEX = new RegExp('^[' + whitespaces + ']*$');
var string = require('./string');
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
module.exports = function blankString(target) {
    return string(target) && WHITESPACES_REGEX.test(target);
};