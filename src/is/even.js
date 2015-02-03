import number from './number';

/**
 * Check if `target` is an even number.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Return `true` if `target` is an even number, else `false`.
 *
 * @example
 *
 * is.even(null);
 * // => false
 *
 * is.even(21);
 * // => false
 *
 * is.even(20);
 * // => true
 */
function even(target) {
    return number(target) && target % 2 === 0;
}

export default even;