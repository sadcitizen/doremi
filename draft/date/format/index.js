import isValid from '../is-valid';
import isString from '../../common/is-string';
import padLeft from '../../string/_pad-left';
import { UNDEF } from '../../internal/constants';
import defaultLocale from './locales/en';

const regex = /(Q|Y{1,4}|M{1,4}|D{1,4}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|f{1,3}|T{1,2}|t{1,2}|Z)/g;

function dayOfWeek(date) {
    const day = date.getDay();

    return day === 0 ? 6 : day - 1;
}

const tokens = {
    YYYY: date => padLeft(date.getFullYear(), 4, '0'),

    YYY: date => date.getFullYear(),

    YY: date => padLeft(date.getFullYear() % 100, 2, '0'),

    Y: date => date.getFullYear() % 100,

    MMMM: (date, locale) => locale.months.longs[date.getMonth()],

    MMM: (date, locale) => locale.months.shorts[date.getMonth()],

    MM: date => padLeft((date.getMonth() + 1) % 100, 2, '0'),

    M: date => (date.getMonth() + 1) % 100,

    DDDD: (date, locale) => locale.days.longs[dayOfWeek(date)],

    DDD: (date, locale) => locale.days.shorts[dayOfWeek(date)],

    DD: date => padLeft(date.getDate() % 100, 2, '0'),

    D: date => date.getDate(),

    HH: date => padLeft(date.getHours(), 2, '0'),

    H: date => date.getHours(),

    hh(date) {
        const hours = date.getHours();

        return padLeft(hours <= 12 ? hours : hours - 12, 2, '0');
    },

    h(date) {
        const hours = date.getHours();

        return hours <= 12 ? hours : hours - 12;
    },

    mm: date => padLeft(date.getMinutes(), 2, '0'),

    m: date => date.getMinutes(),

    ss: date => padLeft(date.getSeconds(), 2, '0'),

    s: date => date.getSeconds(),

    fff: date => padLeft(date.getMilliseconds(), 3, '0'),

    ff: date => padLeft(Math.floor(date.getMilliseconds() / 10), 2, '0'),

    f: date => Math.floor(date.getMilliseconds() / 100),

    TT: date => date.getHours() >= 12 ? 'PM' : 'AM',

    tt: date => date.getHours() >= 12 ? 'pm' : 'am',

    Q: date => Math.ceil((date.getMonth() + 1) / 3),

    Z(date) {
        const offset = date.getTimezoneOffset();
        const abs = Math.abs(offset);

        return (offset > 0 ? '-' : '+') + padLeft(Math.floor(abs / 60), 2, '0') + padLeft(abs % 60, 2, '0');
    }
};

/**
 * @param {Date} target
 * @param {string} pattern
 * @param {Object} [locale]
 *
 * @returns {string}
 *
 * @immutable
 */
export default function (target, pattern, locale = defaultLocale) {
    if (!isValid(target)) {
        throw new TypeError('A valid date is expected');
    }

    if (!isString(pattern)) {
        throw new TypeError('The pattern must be a string');
    }

    if (pattern.length === 0) {
        return '';
    }

    return pattern.replace(regex, match => tokens[match] !== UNDEF ? tokens[match](target, locale) : match);
}
