import { UNDEF } from '../../internal/constants';

/**
 * Checks if the given value is 'null' or `undefined`.
 *
 * @category common
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the value is not `null` and `undefined`, else `false`.
 */
export default value => value !== UNDEF && value !== null;
