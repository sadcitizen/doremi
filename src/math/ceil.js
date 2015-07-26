'use strict';

import baseRound from '../internal/baseRound';

/**
 * Creates number rounded up to precision.
 *
 * @param {number} num The number to round up.
 * @param {number} precision The precision to round up to.
 * @returns {number} Returns the rounded up number.
 *
 * @example
 *
 * ceil(42.42);
 * // => 43
 *
 * ceil(5.4321, 2);
 * // => 5.44
 */
export default baseRound('ceil');