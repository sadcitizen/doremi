import startOf from '../start-of';

/**
 * @param {Date} value The date to compare.
 * @param {Date} other The date to compare.
 * @param {('year'|'Y'|'month'|'M'|'day'|'D'|'hour'|'h'|'minute'|'m'|'second'|'s'|'millisecond'|'ms')} unit The time unit.
 * @returns {boolean} True if dates are equal, false otherwise.
 */
export default function (value, other, unit = 'ms') {
    if (unit === 'ms' || unit === 'millisecond') {
        return value.getTime() === other.getTime();
    }

    return startOf(value, unit).getTime() === startOf(other, unit).getTime();
}