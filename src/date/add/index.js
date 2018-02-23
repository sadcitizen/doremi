import normalize from '../../internal/normalize-time-unit';
import clone from '../clone';

function year(target, count) {
    target.setFullYear(target.getFullYear() + count);
    return target;
}

function month(target, count) {
    const m = target.getMonth();
    let next = m + count;

    if (next < 0) {
        next = 12 + next;
    }

    target.setMonth(target.getMonth() + count);

    if (target.getMonth() !== next) {
        target.setDate(0);
    }

    return target;
}

function day(target, count) {
    target.setDate(target.getDate() + count);
    return target;
}

function hour(target, count) {
    target.setHours(target.getHours() + count);
    return target;
}

function minute(target, count) {
    target.setMinutes(target.getMinutes() + count);
    return target;
}

function second(target, count) {
    target.setSeconds(target.getSeconds() + count);
    return target;
}

function millisecond(target, count) {
    target.setMilliseconds(target.getMilliseconds() + count);
    return target;
}

const handlers = { year, month, day, hour, minute, second, millisecond };

/**
 * @param {Date} target The date to modify.
 * @param {number} count The count of units.
 * @param {('year'|'Y'|'month'|'M'|'day'|'D'|'hour'|'h'|'minute'|'m'|'second'|'s'|'millisecond'|'ms')} unit The time unit.
 * @returns {Date} The mutated date.
 */
export default function (target, count, unit) {
    const handler = handlers[normalize(unit)];

    if (handler) {
        return handler(clone(target), count);
    } else {
        throw new Error('Unexpected time unit!');
    }
}
