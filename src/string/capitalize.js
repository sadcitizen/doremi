import stringify from './stringify';

/**
 * Capitalizes the first character of `target`.
 *
 * @param {string|*} target The stringify to capitalize.
 * @returns {string} Returns the capitalized stringify.
 *
 * @example
 * capitalize('hi!');
 * // => 'Hi!'
 *
 * capitalize();
 * // => '' (empty stringify)
 */
function capitalize(target) {
    target = stringify(target);
    return target.length > 0 ? target.charAt(0).toUpperCase() + target.slice(1) : target;
}

export default capitalize;