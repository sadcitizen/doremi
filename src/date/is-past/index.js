import isValid from '../is-valid';
import { INVALID_DATE } from '../../constants/errors';

/**
 * Checks if the given date is past.
 *
 * @param {Date} value The value to check.
 * @returns {boolean}
 */
export default function (value) {
    if (!isValid(value)) {
        throw new Error(INVALID_DATE);
    }

    const now = new Date();

    return value.getTime() < now.getTime();
}
