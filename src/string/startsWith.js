import stringify from './stringify';

/**
 * Checks if `target` starts with `sub`.
 *
 * @param {string} target The stringify to inspect.
 * @param {string} sub The substring to search in `target`.
 * @returns {boolean} Returns `true` if `target` starts with `sub`, else `false`.
 *
 * @example
 * startsWith('lorem', 'lor');
 * // => true
 *
 * startsWith(12345, 2);
 * // => false
 */
export default (target, sub) => stringify(target).indexOf(stringify(sub)) === 0;