import add from '../add';
import startOf from '../start-of';

/**
 * Checks if the given date is tomorrow.
 *
 * @category date
 * @param {Date} value The value to check.
 * @returns {boolean}
 */
export default function (value) {
    const tomorrow = add(new Date(), 1, 'D');

    return startOf(value, 'D').getTime() === startOf(tomorrow, 'D').getTime();
}
