import type from './type';

/**
 * Check if `target` is 'null' or `undefined`.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Return `true` if `target` is not `null` and `undefined`, else `false`.
 *
 * @example
 *
 * is.exists(null);
 * // => false
 *
 * is.exists('');
 * // => true
 */
function exists(target) {
    var tp = type(target);
    return tp !== 'undefined' && tp !== 'null';
}

export default exists;