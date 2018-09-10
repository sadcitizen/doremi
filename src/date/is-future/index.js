import isValid from '../is-valid';

/**
 * Checks if the given date is future.
 *
 * @category date
 * @param {Date} value The value to check.
 * @returns {boolean}
 */
export default function (value) {
    if (!isValid(value)) {
        throw new Error('The value must be a valid date');
    }

    const now = new Date();

    return value.getTime() > now.getTime();
}
