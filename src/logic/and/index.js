/**
 * Checks if all conditions are true.
 *
 * @memberOf logic
 * @param {...boolean} conditions The conditions to check.
 * @return {boolean} Returns `true` if all condition are `true`, `false` otherwise.
 */
export default (...conditions) => conditions.length ? conditions.every(Boolean) : false;
