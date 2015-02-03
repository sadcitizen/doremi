import string from '../to/string';

/**
 * Swaps case of case-based characters in a given string.
 *
 * @param {String} target The string to swap.
 * @returns {String} Returns the swapped string.
 *
 * @example
 *
 * st.swap('hello');
 * // => 'HELLO'
 *
 * st.swap('lOREM');
 * // => 'Lorem'
 */
function swap(target) {
    target = string(target);

    if (target.length === 0) {
        return '';
    }

    return target.replace(/\S/g, function (char) {
        return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    });
}

export default swap;