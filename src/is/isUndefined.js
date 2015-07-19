/**
 * Check if `target` is undefined.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is undefined, else `false`.
 *
 * @example
 *
 * isUndefined(void 0);
 * // => true
 *
 * isUndefined('');
 * // => false
 */
export default target => target === undefined;