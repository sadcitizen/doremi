import normalize from '../../internal/normalize-time-unit';
import clone from '../clone';

const handlers = {
    year(target, count) {
        target.setFullYear(target.getFullYear() + count);
        return target;
    },

    month(target, count) {
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
    },

    day(target, count) {
        target.setDate(target.getDate() + count);
        return target;
    },

    hour(target, count) {
        target.setHours(target.getHours() + count);
        return target;
    },

    minute(target, count) {
        target.setMinutes(target.getMinutes() + count);
        return target;
    },

    second(target, count) {
        target.setSeconds(target.getSeconds() + count);
        return target;
    },

    millisecond(target, count) {
        target.setMilliseconds(target.getMilliseconds() + count);
        return target;
    }
};

/**
 * Adds time units to a date.
 *
 * @param {Date} target The date to modify.
 * @param {number} count The count of units.
 * @param {string="year", "month", "day", "hour", "minute", "second", "millisecond"} unit The time unit.
 * @returns {Date} The mutated date.
 *
 * @example
 * const date = new Date(2015, 0, 1);
 * add(date, 1, 'years');
 * console.log(date.toUTCString());
 * // => "Thu, 31 Dec 2015 19:00:00 GMT"
 */
export default function (target, count, unit) {
    const handler = handlers[normalize(unit)];

    if (handler) {
        return handler(clone(target), count);
    } else {
        throw new Error(`"${unit}" is invalid time unit`);
    }
}
