import type from './type';

/**
 * Checks if `target` is regexp.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is regexp, else 'false'.
 *
 * @example
 *
 * isRegexp('\d');
 * // => false
 *
 * isRegexp(/\d+/);
 * // => true
 *
 * isRegexp(new Regexp('0-9', 'ig'));
 * // => true
 */
export default target => type(target) === 'regexp';