/**
 * Decapitalizes the first character of `target`.
 *
 * @param {string} target The string to decapitalize.
 * @returns {string} Returns the decapitalized string.
 *
 * @example
 * decapitalize('Hi!');
 * // => 'hi!'
 *
 * decapitalize();
 * // => '' (empty stringify)
 */
export default function (target) {
    target = String(target);

    return target.length > 0
        ? target.charAt(0).toLowerCase() + target.slice(1)
        : target;
}
