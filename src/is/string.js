import type from './type';

/**
 * Checks if `target` is string.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is string, else 'false'.
 *
 * @example
 *
 * is.string(false);
 * // => false
 *
 * is.string(42);
 * // => false
 *
 * is.string('42');
 * // => true
 */
function string(target) {
    return type(target) === 'string';
}

export default string;