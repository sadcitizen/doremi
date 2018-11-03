/**
 * Checks if at least one of conditions is true.
 *
 * @memberOf logic
 * @param {...boolean} conditions The conditions to check.
 * @return {boolean} Returns `true` at least one of conditions is true, `false` otherwise.
 */
export default (...conditions) => conditions.length ? conditions.some(Boolean) : false;
