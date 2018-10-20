const { log, round } = Math;

/**
 * Calculates the logarithm of the value with base, or the natural logarithm if base is undefined.
 *
 * @category math
 * @param {number} value The value for which to calculate the logarithm.
 * @param {number} base The base for the logarithm.
 * @return {number} Returns the logarithm.
 */
export default (value, base) => round(log(value) / (base ? log(base) : 1) * 1e6) / 1e6;
