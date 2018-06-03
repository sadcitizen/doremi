import ternary from '../../logic/ternary';

/**
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export default (value, min, max) => ternary(value < min, min, ternary(value > max, max, value));
