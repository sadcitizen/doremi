import chop from './chop';

/**
 * Reverses a string.
 *
 * @param {String} target The string to reverse.
 * @returns {String} Returns the reversed string.
 *
 * @example
 *
 * reverse('lorem');
 * // => 'merol'
 *
 * reverse(12345);
 * // => '54321'
 */
export default target => chop(target).reverse().join('');