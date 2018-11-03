import isValid from '../is-valid';
import { INVALID_DATE } from '../../constants/errors';

/**
 * Checks if the given date is future.
 *
 * @memberOf date
 * @param {Date} value The value to check.
 * @returns {boolean} Returns `true` if the value is future, else `false`.
 */
export default function (value) {
    if (!isValid(value)) {
        throw new Error(INVALID_DATE);
    }

    const now = new Date();

    return value.getTime() > now.getTime();
}
