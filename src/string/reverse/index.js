/**
 * Reverses a string.
 *
 * @param {string} target The string to reverse.
 * @returns {string} Returns the reversed string.
 *
 * @example
 * reverse('lorem');
 * // => 'merol'
 *
 * reverse(12345);
 * // => '54321'
 */
export default target => String(target).split('').reverse().join('');
