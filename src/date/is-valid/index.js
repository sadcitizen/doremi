import isDate from '../is-date';

/**
 * @param value The value to check.
 * @returns {boolean} Returns `true` if value is a valid date, else `false`.
 */
export default value => isDate(value) && !isNaN(value.getTime());
