import units from '../../constants/time-units';
import startOf from '../start-of';
import yesterday from '../yesterday';

/**
 * Checks if the given date is yesterday.
 *
 * @category date
 * @param {Date} value The value to check.
 * @returns {boolean} Returns `true` if the value is yesterday, else `false`.
 */
export default function (value) {
    return startOf(value, units.day).getTime() === yesterday().getTime();
}
