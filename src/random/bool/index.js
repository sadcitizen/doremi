/**
 * Generates a pseudo-random boolean value.
 * @returns {boolean} Returns the boolean value.
 *
 * @example
 *
 * bool();
 * // => true
 *
 * bool();
 * // => false
 */
export default () => Math.random() < 0.5;
