import type from './type';

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
function regexp(target) {
    return type(target) === 'regexp';
}

export default regexp;