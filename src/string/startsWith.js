import string from '../to/string';

/**
 * Checks if `target` starts with `sub`.
 *
 * @param {String} target The string to inspect.
 * @param {String} sub The substring to search in `target`.
 * @returns {Boolean} Returns `true` if `target` starts with `sub`, else `false`.
 *
 * @example
 *
 * startsWith('lorem', 'lor');
 * // => true
 *
 * startsWith(12345, 2);
 * // => false
 */
function startsWith(target, sub) {
    return string(target).indexOf(string(sub)) === 0;
}

export default startsWith;