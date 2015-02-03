import type from './type';

/**
 * Checks if `target` is date.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is date, else 'false'.
 *
 * @example
 *
 * is.date('2014-11-22');
 * // => false
 *
 * is.date(new Date());
 * // => true
 */
function date(target) {
    return type(target) === 'date';
}

export default date;