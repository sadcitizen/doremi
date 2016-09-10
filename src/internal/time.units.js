const millisecond = 1;
const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const week = 7 * day;
const month = 30 * day; // roughly
const year = 365 * day; // not at leep year

export const units = {
    millisecond,
    second,
    minute,
    hour,
    day,
    week,
    month,
    year
};

export default {
    get(unitString) {
        if (units[unitString] !== undefined) return units[unitString];

        return units[unitString.slice(0, -1)]; // 'days' → 'day'
    }
}