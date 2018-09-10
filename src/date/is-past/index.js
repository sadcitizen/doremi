import isValid from '../is-valid';

/**
 * Checks if the given date is past.
 *
 * @param {Date} value The value to check.
 * @returns {boolean}
 */
export default function (value) {
    if (!isValid(value)) {
        throw new Error('A valid date is expected');
    }

    const now = new Date();

    return value.getTime() < now.getTime();
}
