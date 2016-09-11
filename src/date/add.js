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
 * [add description]
 * @param {[type]} target [description]
 * @param {[type]} count  [description]
 * @param {[type]} unit   [description]
 */
function add(target, count, unit) {
    const adder = adders[unit];

    if (adder) {
        return adder(target, count);
    } else {
        throw new Error('!');
    }
}

export default add;
