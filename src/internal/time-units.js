const milliseconds = 1;
const seconds = 1000;
const minutes = 60 * seconds;
const hours = 60 * minutes;
const days = 24 * hours;
const weeks = 7 * days;
const months = 30 * days; // roughly
const years = 365 * days; // not a leap year

export const units = {
    milliseconds,
    seconds,
    minutes,
    hours,
    days,
    weeks,
    months,
    years
};

export const shortUnits = {
    ms: milliseconds,
    s: seconds,
    m: minutes,
    h: hours,
    d: days,
    w: weeks,
    M: months,
    y: years
};

export default {
    get(unitName = 'ms') {
        if (units[unitName] !== undefined) {
            return units[unitName];
        }

        if (shortUnits[unitName] !== undefined) {
            return shortUnits[unitName];
        }

        throw new Error('Unknown unit name');
    }
};
