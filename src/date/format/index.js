import UNDEF from '../../constants/undefined';
import isString from '../../common/is-string';
import padLeft from '../../string/pad-left';
import isValid from '../is-valid';
import defaultLocale from './locales/en';

const regex = /(Q|Y{1,4}|M{1,4}|D{1,4}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|f{1,3}|T{1,2}|t{1,2}|Z)/g;

function dayOfWeek(date) {
    const day = date.getDay();

    return day === 0 ? 6 : day - 1;
}

const tokens = {
    YYYY: date => padLeft(String(date.getFullYear()), 4, '0'),

    YYY: date => date.getFullYear(),

    YY: date => padLeft(String(date.getFullYear() % 100), 2, '0'),

    Y: date => date.getFullYear() % 100,

    MMMM: (date, locale) => locale.months.longs[date.getMonth()],

    MMM: (date, locale) => locale.months.shorts[date.getMonth()],

    MM: date => padLeft(String((date.getMonth() + 1) % 100), 2, '0'),

    M: date => (date.getMonth() + 1) % 100,

    DDDD: (date, locale) => locale.days.longs[dayOfWeek(date)],

    DDD: (date, locale) => locale.days.shorts[dayOfWeek(date)],

    DD: date => padLeft(String(date.getDate() % 100), 2, '0'),

    D: date => date.getDate(),

    HH: date => padLeft(String(date.getHours()), 2, '0'),

    H: date => date.getHours(),

    hh(date) {
        const hours = date.getHours();

        return padLeft(String(hours <= 12 ? hours : hours - 12), 2, '0');
    },

    h(date) {
        const hours = date.getHours();

        return hours <= 12 ? hours : hours - 12;
    },

    mm: date => padLeft(String(date.getMinutes()), 2, '0'),

    m: date => date.getMinutes(),

    ss: date => padLeft(String(date.getSeconds()), 2, '0'),

    s: date => date.getSeconds(),

    fff: date => padLeft(String(date.getMilliseconds()), 3, '0'),

    ff: date => padLeft(String(Math.floor(date.getMilliseconds() / 10)), 2, '0'),

    f: date => Math.floor(date.getMilliseconds() / 100),

    TT: date => date.getHours() >= 12 ? 'PM' : 'AM',

    tt: date => date.getHours() >= 12 ? 'pm' : 'am',

    Q: date => Math.ceil((date.getMonth() + 1) / 3),

    /**
     * @return {string}
     */
    Z(date) {
        const offset = date.getTimezoneOffset();
        const abs = Math.abs(offset);

        return (offset > 0 ? '-' : '+') + padLeft(String(Math.floor(abs / 60)), 2, '0') + padLeft(String(abs % 60), 2, '0');
    }
};

/**
 * Formats the given date to a string according to `pattern`.
 *
 * @memberOf date
 * @param {Date} value The date to format.
 * @param {string} pattern The string to replace tokens.
 * @param {Object} [locale] Locale.
 * @returns {string} Returns the formatted date.
 */
export default function (value, pattern, locale = defaultLocale) {
    if (!isValid(value)) {
        throw new TypeError('A valid date is expected');
    }

    if (!isString(pattern)) {
        throw new TypeError('The pattern must be a string');
    }

    if (pattern.length === 0) {
        return '';
    }

    return pattern.replace(regex, match => tokens[match] !== UNDEF ? tokens[match](value, locale) : match);
}
