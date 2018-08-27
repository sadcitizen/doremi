/**
 * @param {...boolean} conditions
 * @return {boolean}
 */
export default (...conditions) => conditions.length ? conditions.every(Boolean) : false;
