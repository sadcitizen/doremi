import lchop from './lchop';

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
function reverse(target) {
    return lchop(target).reverse().join('');
}

export default reverse;