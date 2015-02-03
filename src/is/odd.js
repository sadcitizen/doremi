import number from './number';

/**
 * Check if `target` is an odd number.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Return `true` if `target` is an odd number, else `false`.
 *
 * @example
 *
 * is.odd(null);
 * // => false
 *
 * is.odd(21);
 * // => true
 *
 * is.odd(20);
 * // => false
 */
function odd(target) {
    return number(target) && target % 2 !== 0;
}

export default odd;