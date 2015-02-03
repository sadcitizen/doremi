import chop from './chop';

/**
 * Reverses a string.
 *
 * @param {String} target The string to reverse.
 * @returns {String} Returns the reversed string.
 *
 * @example
 *
 * st.reverse('lorem');
 * // => 'merol'
 *
 * st.reverse(12345);
 * // => '54321'
 */
module.exports = function reverse(target) {
    return chop(target).reverse().join('');
};