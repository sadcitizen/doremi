import hex from './hex';
import choice from './choice';

/**
 * Generates a pseudo-random Globally Unique Identifier (v4).
 * @returns {string} Returns the guid.
 *
 * @example
 *
 * guid();
 * // => 73e0ddb3-868d-4bb1-a0f6-6cb19536bc43
 *
 * guid();
 * // => 84d82ea7-a8d8-4b94-add5-818650da2ea5
 */
function guid() {
    return hex(8) + '-' + hex(4) + '-4' + hex(3) + '-' + choice(8, 9, 'a', 'b') + hex(3) + '-' + hex(12);
}

export default guid;
