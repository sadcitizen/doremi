import type from '../../common/type';
/**
 * Checks if `target` is number.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is number, else 'false'.
 */
export default target => type(target) === 'number';
