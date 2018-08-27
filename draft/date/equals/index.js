import startOf from '../start-of';

/**
 * @param {Date} value
 * @param {Date} other
 * @param {('year'|'Y'|'month'|'M'|'day'|'D'|'hour'|'h'|'minute'|'m'|'second'|'s'|'millisecond'|'ms')} unit
 * @returns {boolean}
 */
export default function (value, other, unit = 'ms') {
    if (unit === 'ms' || unit === 'millisecond') {
        return value.getTime() === other.getTime();
    }

    return startOf(value, unit).getTime() === startOf(other, unit).getTime();
}
