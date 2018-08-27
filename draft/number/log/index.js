const { log, round } = Math;

/**
 * @param {number} value
 * @param {number} base
 * @return {number}
 */
export default (value, base) => round(log(value) / (base ? log(base) : 1) * 1e6) / 1e6;
