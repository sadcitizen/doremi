/**
 * Generates a pseudo-random boolean value.
 * @returns {boolean} Returns the boolean value.
 *
 * @example
 *
 * bool();
 * // => true
 *
 * bool();
 * // => false
 */
function bool() {
    return Math.random() < 0.5;
}

export default bool;
