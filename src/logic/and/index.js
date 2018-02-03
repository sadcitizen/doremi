/**
 * Returns true if all conditions are true, false otherwise.
 *
 * @param {boolean[]} conditions The conditions to check.
 * @return {boolean} Returns true or false.
 *
 * @example
 * and(true, true, true);
 * // => true
 *
 * and(true, false, true);
 * // => false
 */
export default (...conditions) => conditions.length ? conditions.every(Boolean) : false;
