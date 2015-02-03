import type from './type';

/**
 * Checks if `target` is NaN.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is NaN, else 'false'.
 *
 * @example
 *
 * is.nan('NaN');
 * // => false
 *
 * is.nan(NaN);
 * // => true
 *
 * is.nan('42');
 * // => false
 */
function nan(target) {
    return type(target) === 'nan';
}

export default nan;