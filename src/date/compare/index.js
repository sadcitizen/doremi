import { INVALID_DATES } from '../../constants/errors';
import sign from '../../number/sign';
import isValid from '../is-valid';

/**
 * Compares two dates.
 *
 * @category date
 * @param {Date} value The first date to compare.
 * @param {Date} other The second date to compare.
 * @returns {number} Returns `-1` if first date is before second date, returns `1` if first date is after second date, `0` otherwise.
 */
export default function (value, other) {
    if (!isValid(value) || !isValid(other)) {
        throw new Error(INVALID_DATES);
    }

    return sign(value.getTime() - other.getTime());
}
