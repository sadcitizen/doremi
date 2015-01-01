var string = require('../to/string');

/**
 * Checks if `target` ends with `sub`.
 *
 * @param {String} target The string to inspect.
 * @param {String} sub The substring to search in `target`.
 * @returns {Boolean} Returns `true` if `target` ends with `sub`, else `false`.
 *
 * @example
 *
 * string.startsWith('lorem', 'lor');
 * // => true
 *
 * string.startsWith(12345, 2);
 * // => false
 */
module.exports = function endsWith(target, sub) {
    target = string(target);
    sub = string(sub);

    return target.indexOf(sub, target.length - sub.length) !== -1;
};