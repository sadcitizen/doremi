import ternary from '../../logic/ternary';

/**
 * Returns sign of the given number.
 *
 * @category number
 * @param {number} value
 * @returns {number}
 */
export default value => ternary(value < 0, -1, ternary(value > 0, 1, 0));
