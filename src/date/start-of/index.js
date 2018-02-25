import normalize from '../../internal/normalize-time-unit';
import clone from '../clone';

function year(value) {
    value.setMonth(0);
    return month(value);
}

function month(value) {
    value.setDate(1);
    return day(value);
}

function day(value) {
    value.setHours(0);
    return hour(value);
}

function hour(value) {
    value.setMinutes(0);
    return minute(value);
}

function minute(value) {
    value.setSeconds(0);
    return second(value);
}

function second(value) {
    value.setMilliseconds(0);
    return value;
}

const handlers = { year, month, day, hour, minute, second };

/**
 * @param {Date} value The date to modify.
 * @param {('year'|'Y'|'month'|'M'|'day'|'D'|'hour'|'h'|'minute'|'m'|'second'|'s')} unit The time unit.
 * @returns {Date} The mutated date.
 */
export default function (value, unit) {
    const handler = handlers[normalize(unit)];

    if (handler) {
        return handler(clone(value));
    } else {
        throw new Error(`"${unit}" is invalid time unit`);
    }
}
