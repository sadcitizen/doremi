import toString from '../to/toString';

/**
 * Decapitalizes the first character of `target`.
 *
 * @param {string} target The string to decapitalize.
 * @returns {string} Returns the decapitalized string.
 *
 * @example
 *
 * decapitalize('Hi!');
 * // => 'hi!'
 *
 * decapitalize();
 * // => '' (empty string)
 */
function decapitalize(target) {
    target = toString(target);
    return target.length > 0 ? target.charAt(0).toLowerCase() + target.slice(1) : target;
}

export default decapitalize;