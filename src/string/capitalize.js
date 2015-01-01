var toString = require('../to/string');

/**
 * Capitalizes the first character of `target`.
 *
 * @param {string} target The string to capitalize.
 * @returns {string} Returns the capitalized string.
 *
 * @example
 *
 * string.capitalize('hi!');
 * // => 'Hi!'
 *
 * string.capitalize();
 * // => '' (empty string)
 */
module.exports = function capitalize(target) {
    target = toString(target);
    return target.length > 0 ? target.charAt(0).toUpperCase() + target.slice(1) : target;
};