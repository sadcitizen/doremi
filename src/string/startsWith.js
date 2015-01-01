var string = require('../to/string');

/**
 * Checks if `target` starts with `sub`.
 *
 * @param {String} target The string to inspect.
 * @param {String} sub The substring to search in `target`.
 * @returns {Boolean} Returns `true` if `target` starts with `sub`, else `false`.
 *
 * @example
 *
 * string.startsWith('lorem', 'lor');
 * // => true
 *
 * string.startsWith(12345, 2);
 * // => false
 */
module.exports = function startsWith(target, sub) {
    return string(target).indexOf(string(sub)) === 0;
};