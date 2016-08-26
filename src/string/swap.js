import stringify from './stringify';

/**
 * Swaps case of case-based characters in a given stringify.
 *
 * @param {string} target The stringify to swap.
 * @returns {string} Returns the swapped stringify.
 *
 * @example
 * swap('hello');
 * // => 'HELLO'
 *
 * swap('lOREM');
 * // => 'Lorem'
 */
function swap(target) {
    target = stringify(target);

    if (target.length === 0) {
        return '';
    }

    return target.replace(/\S/g, char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase());
}

export default swap;