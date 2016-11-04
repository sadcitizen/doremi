/**
 * Swaps case of case-based characters in a given string.
 *
 * @param {string} target The string to swap.
 * @returns {string} Returns the swapped string.
 *
 * @example
 * swap('hello');
 * // => 'HELLO'
 *
 * swap('lOREM');
 * // => 'Lorem'
 */
export default function (target) {
    target = String(target);

    if (target.length === 0) {
        return '';
    }

    return target.replace(/\S/g, char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase());
}
