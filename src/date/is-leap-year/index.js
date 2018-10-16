import { INVALID_DATE } from '../../constants/errors';
import isValid from '../is-valid';

/**
 * Checks if the value is a leap year.
 *
 * @category date
 * @param {Date} value The date to check.
 * @returns {boolean} Returns `true` if the value is a leap year, else `false`.
 */
export default function (value) {
    let year;

    if (isValid(value)) {
        year = value.getFullYear();
    } else {
        throw new Error(INVALID_DATE);
    }

    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}
