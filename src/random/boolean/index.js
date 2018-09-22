import random from '../random';

/**
 * Generates a pseudo-random boolean value.
 *
 * @category random
 * @returns {boolean} Returns a pseudo-random boolean value.
 */
export default () => random() < 0.5;
