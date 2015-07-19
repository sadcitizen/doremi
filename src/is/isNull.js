/**
 * Checks if `target` is null.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is null, else `false`.
 *
 * @example
 *
 * isNull(null);
 * // => true
 *
 * isNull('');
 * // => false
 */
export default target => target === null;