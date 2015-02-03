/**
 * Check if `target` is defined.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is defined, else `false`.
 *
 * @example
 *
 * is.defined(void 0);
 * // => false
 *
 * is.defined('');
 * // => true
 */
function defined(target) {
    return target !== undefined;
}

export default defined;