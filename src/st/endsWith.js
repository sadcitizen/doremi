import string from '../to/string';

/**
 * Checks if `target` ends with `sub`.
 *
 * @param {String} target The string to inspect.
 * @param {String} sub The substring to search in `target`.
 * @returns {Boolean} Returns `true` if `target` ends with `sub`, else `false`.
 *
 * @example
 *
 * st.startsWith('lorem', 'lor');
 * // => true
 *
 * st.startsWith(12345, 2);
 * // => false
 */
function endsWith(target, sub) {
    target = string(target);
    sub = string(sub);

    return target.indexOf(sub, target.length - sub.length) !== -1;
}

export default endsWith;