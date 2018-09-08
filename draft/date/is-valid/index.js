import isDate from '../../common/is-date';

/**
 * @param value
 * @returns {boolean}
 */
export default value => isDate(value) && !isNaN(value.getTime());