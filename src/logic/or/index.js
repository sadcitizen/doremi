/**
 * Returns false if all conditions are false, true otherwise.
 *
 * @param {Array} conditions The conditions to check.
 * @return {boolean} Returns true or false.
 *
 * @example
 * or(false, false, false);
 * // => false
 *
 * or(true, false, true);
 * // => true
 */
export default (...conditions) => conditions.length ? conditions.some(Boolean) : false;
