import string from '../to/string';

/**
 * Decapitalizes the first character of `target`.
 *
 * @param {string} target The string to decapitalize.
 * @returns {string} Returns the decapitalized string.
 *
 * @example
 *
 * st.decapitalize('Hi!');
 * // => 'hi!'
 *
 * st.capitalize();
 * // => '' (empty string)
 */
function decapitalize(target) {
    target = string(target);
    return target.length > 0 ? target.charAt(0).toLowerCase() + target.slice(1) : target;
}

export default decapitalize;