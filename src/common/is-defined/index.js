/**
 * Checks if `target` is 'null' or `undefined`.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Return `true` if `target` is not `null` and `undefined`, else `false`.
 *
 * @example
 * isDefined(null);
 * // => false
 *
 * isDefined('');
 * // => true
 */
export default target => target !== undefined && target !== null;
