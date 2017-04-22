import baseRound from '../../internal/base-round';

/**
 * Creates number rounded down to precision.
 *
 * @param {number} num The number to round down.
 * @param {number} precision The precision to round down to.
 * @returns {number} Returns the rounded down number.
 *
 * @example
 *
 * floor(42.42);
 * // => 42
 *
 * floor(5.4321, 2);
 * // => 5.43
 */
export default baseRound('floor');
