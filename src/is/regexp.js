var type = require('./type');

/**
 * Checks if `target` is regexp.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is regexp, else 'false'.
 *
 * @example
 *
 * is.regexp('\d');
 * // => false
 *
 * is.regexp(/\d+/);
 * // => true
 *
 * is.regexp(new Regexp('0-9', 'ig'));
 * // => true
 */
module.exports = function regexp(target) {
    return type(target) === 'regexp';
};