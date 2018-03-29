const { log, round } = Math;

/**
 * @param {number} value The number for which to calculate the logarithm.
 * @param {number} base The base for the logarithm. Optional.
 * @return {number} Returns the logarithm of the number with `base`.
 */
export default (value, base) => round(log(value) / (base ? log(base) : 1) * 1e6) / 1e6;
