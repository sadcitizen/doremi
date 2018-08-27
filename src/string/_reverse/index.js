/**
 * Reverses a string.
 *
 * @param {string} target The string to _reverse.
 * @returns {string} Returns the reversed string.
 *
 * @example
 * _reverse('lorem');
 * // => 'merol'
 *
 * _reverse(12345);
 * // => '54321'
 */
export default target => String(target).split('').reverse().join('');
