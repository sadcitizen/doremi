var WHITESPACES_REGEX = /^[\s\0\b\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]*$/;

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
    return WHITESPACES_REGEX.test(target);
};