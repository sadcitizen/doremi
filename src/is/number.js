import type from './type';

/**
 * Checks if `target` is number.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is number, else 'false'.
 *
 * @example
 *
 * is.number(false);
 * // => false
 *
 * is.number(42);
 * // => true
 *
 * is.number('42');
 * // => false
 */
function number(target) {
    return type(target) === 'number';
}

export default number;