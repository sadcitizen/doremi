var chop = require('./chop');

/**
 * Reverses a string.
 *
 * @param {String} target The string to reverse.
 * @returns {String} Returns the reversed string.
 *
 * @example
 *
 * string.reverse('lorem');
 * // => 'merol'
 *
 * string.reverse(12345);
 * // => '54321'
 */
module.exports = function reverse(target) {
    return chop(target).reverse().join('');
};