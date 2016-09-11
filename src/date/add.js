'use strict';

const adders = {
    years(target, count) {
        target.setFullYear(target.getFullYear() + count);
        return target;
    },

    months(target, count) {
        target.setMonth(target.getMonth() + count);
        return target;
    },

    days(target, count) {
        target.setDate(target.getDate() + count);
        return target;
    },

    hours(target, count) {
        target.setHours(target.getHours() + count);
        return target;
    },

    minutes(target, count) {
        target.setMinutes(target.getMinutes() + count);
        return target;
    },

    seconds(target, count) {
        target.setSeconds(target.getSeconds() + count);
        return target;
    },

    milliseconds(target, count) {
        target.setMilliseconds(target.getMilliseconds() + count);
        return target;
    }
};

/**
 * Adds time units to a date.
 *
 * @param {Date} target The date to modify.
 * @param {number} count The count of units.
 * @param {string="years", "months", "days", "hours", "minutes", "seconds", "milliseconds"} unit The time unit.
 * @returns {Date} The mutated date.
 *
 * @example
 * const date = new Date(2015, 0, 1);
 * add(date, 1, 'years');
 * console.log(date.toUTCString());
 * // => "Thu, 31 Dec 2015 19:00:00 GMT"
 */
function add(target, count, unit) {
    const adder = adders[unit];

    if (adder) {
        return adder(target, count);
    } else {
        throw new Error('Unexpected time unit!');
    }
}

export default add;
