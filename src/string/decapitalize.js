import stringify from './stringify';

/**
 * Decapitalizes the first character of `target`.
 *
 * @param {string} target The stringify to decapitalize.
 * @returns {string} Returns the decapitalized stringify.
 *
 * @example
 * decapitalize('Hi!');
 * // => 'hi!'
 *
 * decapitalize();
 * // => '' (empty stringify)
 */
function decapitalize(target) {
    target = stringify(target);
    return target.length > 0 ? target.charAt(0).toLowerCase() + target.slice(1) : target;
}

export default decapitalize;