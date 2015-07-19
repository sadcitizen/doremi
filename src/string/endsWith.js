import toString from '../to/toString';

/**
 * Checks if `target` ends with `sub`.
 *
 * @param {String} target The string to inspect.
 * @param {String} sub The substring to search in `target`.
 * @returns {Boolean} Returns `true` if `target` ends with `sub`, else `false`.
 *
 * @example
 *
 * endsWith('lorem', 'rem');
 * // => true
 *
 * endsWith(12345, 2);
 * // => false
 */
function endsWith(target, sub) {
    target = toString(target);
    sub = toString(sub);

    return target.indexOf(sub, target.length - sub.length) !== -1;
}

export default endsWith;