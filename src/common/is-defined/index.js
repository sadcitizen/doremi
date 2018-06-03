import { UNDEF } from '../../internal/constants';

/**
 * Checks if `target` is 'null' or `undefined`.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Return `true` if `target` is not `null` and `undefined`, else `false`.
 *
 * @example
 * isDefined(null);
 * // => false
 *
 * isDefined('');
 * // => true
 */
export default target => target !== UNDEF && target !== null;
