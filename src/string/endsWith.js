import stringify from './stringify';

/**
 * Checks if `target` ends with `sub`.
 *
 * @param {string} target The stringify to inspect.
 * @param {string} sub The substring to search in `target`.
 * @returns {boolean} Returns `true` if `target` ends with `sub`, else `false`.
 *
 * @example
 * endsWith('lorem', 'rem');
 * // => true
 *
 * endsWith(12345, 2);
 * // => false
 */
function endsWith(target, sub) {
    target = stringify(target);
    sub = stringify(sub);

    return target.indexOf(sub, target.length - sub.length) !== -1;
}

export default endsWith;