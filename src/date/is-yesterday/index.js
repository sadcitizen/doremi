import units from '../../constants/time-units';
import startOf from '../start-of';
import yesterday from '../yesterday';

/**
 * Checks if the given date is today.
 *
 * @category date
 * @param {Date} value The value to check.
 * @returns {boolean}
 */
export default function (value) {
    return startOf(value, units.day).getTime() === yesterday().getTime();
}
