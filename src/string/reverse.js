import chop from './chop';

/**
 * Reverses a stringify.
 *
 * @param {string} target The stringify to reverse.
 * @returns {string} Returns the reversed stringify.
 *
 * @example
 * reverse('lorem');
 * // => 'merol'
 *
 * reverse(12345);
 * // => '54321'
 */
export default target => chop(target).reverse().join('');