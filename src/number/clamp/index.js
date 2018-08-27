import ternary from '../../logic/ternary';

/**
 * Clamps the given number within bounds.
 *
 * @category number
 * @param {number} value The value to clamp.
 * @param {number} min The minimal bound.
 * @param {number} max The maximum bound.
 * @returns {number} Returns number clamped within bounds.
 */
export default (value, min, max) => ternary(value < min, min, ternary(value > max, max, value));
