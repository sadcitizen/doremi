import startOf from '../start-of';

/**
 * Checks if the given date is today.
 *
 * @category date
 * @param {Date} value The value to check.
 * @returns {boolean}
 */
export default function (value) {
    return startOf(value, 'D').getTime() === startOf(new Date(), 'D').getTime();
}
