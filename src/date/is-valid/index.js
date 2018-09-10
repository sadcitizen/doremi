import isDate from '../../common/is-date';

/**
 * Checks if the given value is a valid date.
 *
 * @category date
 * @param {Date} value The value to check.
 * @returns {boolean} Returns `true` if the value is a valid date, else `false`.
 */
export default value => isDate(value) && !isNaN(value.getTime());
