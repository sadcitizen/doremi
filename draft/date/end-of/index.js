import startOf from '../start-of';
import add from '../add';

/**
 * @param {Date} value The date to modify.
 * @param {('year'|'Y'|'month'|'M'|'day'|'D'|'hour'|'h'|'minute'|'m'|'second'|'s')} unit The time unit.
 * @returns {Date} The mutated date.
 */
export default function (value, unit) {
    return add(add(startOf(value, unit), 1, unit), -1, 'ms');
}
