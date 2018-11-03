import units from '../../constants/time-units';
import { INVALID_TIME_UNIT } from '../../constants/errors';
import startOf from '../start-of';

/**
 * Checks if two date are equal.
 *
 * @memberOf date.
 * @param {Date} value The first date to compare.
 * @param {Date} other The second date to compare.
 * @param {('year'|'Y'|'month'|'M'|'day'|'D'|'hour'|'h'|'minute'|'m'|'second'|'s'|'millisecond'|'ms')} unit
 * @returns {boolean}
 */
export default function (value, other, unit = 'ms') {
    const timeUnit = units[unit];

    if (timeUnit) {
        return timeUnit === 'millisecond'
            ? value.getTime() === other.getTime()
            : startOf(value, unit).getTime() === startOf(other, unit).getTime();
    }

    throw new Error(INVALID_TIME_UNIT);
}
