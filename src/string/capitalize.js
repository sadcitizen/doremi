import toString from '../to/toString';

/**
 * Capitalizes the first character of `target`.
 *
 * @param {string} target The string to capitalize.
 * @returns {string} Returns the capitalized string.
 *
 * @example
 *
 * capitalize('hi!');
 * // => 'Hi!'
 *
 * capitalize();
 * // => '' (empty string)
 */
function capitalize(target) {
    target = toString(target);
    return target.length > 0 ? target.charAt(0).toUpperCase() + target.slice(1) : target;
}

export default capitalize;