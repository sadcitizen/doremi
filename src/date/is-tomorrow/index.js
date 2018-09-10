import units from '../../constants/time-units';
import tomorrow from '../tomorrow';
import startOf from '../start-of';

/**
 * Checks if the given date is tomorrow.
 *
 * @category date
 * @param {Date} value The value to check.
 * @returns {boolean}
 */
export default function (value) {
    return startOf(value, units.day).getTime() === tomorrow().getTime();
}
