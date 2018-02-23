/**
 * @param {boolean[]} conditions The conditions to check.
 * @return {boolean} Returns true or false.
 */
export default (...conditions) => conditions.length ? conditions.every(Boolean) : false;
