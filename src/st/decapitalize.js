var toString = require('../to/string');

/**
 * Decapitalizes the first character of `target`.
 *
 * @param {string} target The string to decapitalize.
 * @returns {string} Returns the decapitalized string.
 *
 * @example
 *
 * string.decapitalize('Hi!');
 * // => 'hi!'
 *
 * string.capitalize();
 * // => '' (empty string)
 */
module.exports = function decapitalize(target) {
    target = toString(target);
    return target.length > 0 ? target.charAt(0).toLowerCase() + target.slice(1) : target;
};