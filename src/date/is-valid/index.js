import isDate from '../is-date';
import isNan from '../../is/is-nan';

/**
 * Checks if `target` is a valid date.
 *
 * @param target The value to check.
 * @returns {boolean} Returns `true` if value is a valid date, else `false`.
 *
 * @example
 *
 * isValidDate('');
 * // => false
 *
 * isValidDate(new Date());
 * // => true
 *
 * isValidDate(new Date('date'));
 * // => false
 */
export default target => isDate(target) && !isNan(target.getTime());
