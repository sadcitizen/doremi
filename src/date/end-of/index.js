import startOf from '../start-of';
import add from '../add';

/**
 * Creates a new date at the end of time period.
 *
 * @category date
 * @param {Date} value The original date.
 * @param {('year'|'Y'|'month'|'M'|'day'|'D'|'hour'|'h'|'minute'|'m'|'second'|'s')} unit The time unit.
 * @returns {Date} The new date.
 */
export default function (value, unit) {
    return add(add(startOf(value, unit), 1, unit), -1, 'ms');
}
