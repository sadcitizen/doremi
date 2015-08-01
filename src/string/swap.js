import toString from '../to/toString';

/**
 * Swaps case of case-based characters in a given string.
 *
 * @param {String} target The string to swap.
 * @returns {String} Returns the swapped string.
 *
 * @example
 *
 * swap('hello');
 * // => 'HELLO'
 *
 * swap('lOREM');
 * // => 'Lorem'
 */
function swap(target) {
    target = toString(target);

    if (target.length === 0) {
        return '';
    }

    return target.replace(/\S/g, char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase());
}

export default swap;