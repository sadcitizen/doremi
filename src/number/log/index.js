const { log, round } = Math;

/**
 * Returns the logarithm of the number with `base`, or the natural logarithm of the number if `base` is undefined.
 *
 * @param {number} target The number for which to calculate the logarithm.
 * @param {number} base The base for the logarithm. Optional.
 * @return {number} Returns the logarithm of the number with `base`.
 */
export default (target, base) => round(log(target) / (base ? log(base) : 1) * 1e6) / 1e6;
