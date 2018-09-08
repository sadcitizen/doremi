import isValid from '../is-valid';
import isNumber from '../../common/is-number';

/**
 * @param {Date|number} value
 * @returns {boolean}
 */
export default function (value) {
    let year;

    if (isNumber(value)) {
        year = value;
    } else if (isValid(value)) {
        year = value.getFullYear();
    } else {
        throw new Error('The value must be a number or a date');
    }

    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}