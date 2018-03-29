/**
 * @param {...boolean} conditions
 * @return {boolean}
 */
export default (...conditions) => conditions.length ? conditions.some(Boolean) : false;
