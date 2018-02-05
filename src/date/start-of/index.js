import normalize from '../../internal/normalize-time-unit';
import clone from '../clone';

function year(target) {
    target.setMonth(0);
    return month(target);
}

function month(target) {
    target.setDate(1);
    return day(target);
}

function day(target) {
    target.setHours(0);
    return hour(target);
}

function hour(target) {
    target.setMinutes(0);
    return minute(target);
}

function minute(target) {
    target.setSeconds(0);
    return second(target);
}

function second(target) {
    target.setMilliseconds(0);
    return target;
}

const handlers = { year, month, day, hour, minute, second };

export default function (target, unit) {
    const handler = handlers[normalize(unit)];

    if (handler) {
        return handler(clone(target));
    } else {
        throw new Error(`"${unit}" is invalid time unit`);
    }
}
