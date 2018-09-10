import units from '../../constants/time-units';
import { INVALID_DATE, INVALID_TIME_UNIT } from '../../constants/errors';
import isValid from '../is-valid';
import clone from '../clone';

function year(value, num) {
    value.setFullYear(value.getFullYear() + num);

    return value;
}

function month(value, num) {
    const m = value.getMonth();
    let next = m + num;

    if (next < 0) {
        next = 12 + next;
    }

    value.setMonth(value.getMonth() + num);

    if (value.getMonth() !== next) {
        value.setDate(0);
    }

    return value;
}

function day(value, num) {
    value.setDate(value.getDate() + num);

    return value;
}

function hour(value, num) {
    value.setHours(value.getHours() + num);

    return value;
}

function minute(value, num) {
    value.setMinutes(value.getMinutes() + num);

    return value;
}

function second(value, num) {
    value.setSeconds(value.getSeconds() + num);

    return value;
}

function millisecond(value, num) {
    value.setMilliseconds(value.getMilliseconds() + num);

    return value;
}

const handlers = { year, month, day, hour, minute, second, millisecond };

/**
 * Adds time units to the given date.
 *
 * @category date
 * @param {Date} value The original date.
 * @param {number} num
 * @param {('year'|'Y'|'month'|'M'|'day'|'D'|'hour'|'h'|'minute'|'m'|'second'|'s'|'millisecond'|'ms')} unit
 * @returns {Date} The new date.
 */
export default function (value, num, unit) {
    if (!isValid(value)) {
        throw new Error(INVALID_DATE);
    }

    const handler = handlers[units[unit]];

    if (handler) {
        return handler(clone(value), num);
    }

    throw new Error(INVALID_TIME_UNIT);
}
