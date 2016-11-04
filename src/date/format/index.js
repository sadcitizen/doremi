import isValid from '../is-valid';
import padLeft from '../../string/pad-left';
import aliases from '../../internal/datetime-aliases';

const regex = /(Q|Y{1,4}|M{1,4}|D{1,4}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|f{1,3}|T{1,2}|t{1,2}|Z)/g;

function dayOfWeek(date) {
    const day = date.getDay();
    return day === 0 ? 6 : day - 1;
}

const tokens = {
    'YYYY': date => padLeft(date.getFullYear(), 4, '0'),

    'YYY': date => date.getFullYear(),

    'YY': date => padLeft(date.getFullYear() % 100, 2, '0'),

    'Y': date => date.getFullYear() % 100,

    'MMMM': (date, aliases) => aliases.months.longs[date.getMonth()],

    'MMM': (date, aliases) => aliases.months.shorts[date.getMonth()],

    'MM': date => padLeft((date.getMonth() + 1) % 100, 2, '0'),

    'M': date => (date.getMonth() + 1) % 100,

    'DDDD': (date, aliases) => aliases.days.longs[dayOfWeek(date)],

    'DDD': (date, aliases) => aliases.days.shorts[dayOfWeek(date)],

    'DD': date => padLeft(date.getDate() % 100, 2, '0'),

    'D': date => date.getDate(),

    'HH': date => padLeft(date.getHours(), 2, '0'),

    'H': date => date.getHours(),

    'hh': (date) => {
        let hours = date.getHours();
        return padLeft(hours <= 12 ? hours : hours - 12, 2, '0');
    },

    'h': date => {
        let hours = date.getHours();
        return hours <= 12 ? hours : hours - 12;
    },

    'mm': date => padLeft(date.getMinutes(), 2, '0'),

    'm': date => date.getMinutes(),

    'ss': date => padLeft(date.getSeconds(), 2, '0'),

    's': date => date.getSeconds(),

    'fff': date => padLeft(date.getMilliseconds(), 3, '0'),

    'ff': date => padLeft((date.getMilliseconds() / 10) | 0, 2, '0'),

    'f': date => (date.getMilliseconds() / 100) | 0,

    'TT': date => date.getHours() >= 12 ? 'PM' : 'AM',

    'tt': date => date.getHours() >= 12 ? 'pm' : 'am',

    'Q': date => Math.ceil((date.getMonth() + 1) / 3),

    'Z': date => {
        const offset = date.getTimezoneOffset();
        const abs = Math.abs(offset);
        return (offset > 0 ? '-' : '+') + padLeft((abs / 60) | 0, 2, '0') + padLeft(abs % 60, 2, '0');
    }
};

/**
 * Formats a date to a string according to `pattern`.
 *
 * @param {Date} target The date to format.
 * @param {string} pattern The string of tokens.
 * @param {Object} [locale] The localization. Optional.
 * @returns {string} Returns the string with formatted date.
 *
 * Replaced tokens:
 * YYYY - Year with century as a zero-padded decimal number (e.g. 0900 or 2014)
 * YYY - Year with century as a decimal number (e.g. 900 or 2014)
 * YY - Year without century as a zero-padded decimal number (e.g. 00 or 14)
 * Y - Year without century as a decimal number (e.g. 0 or 14)
 *
 * MMMM - Full month name (e.g. January or December)
 * MMM - Abbreviated month name (e.g. Jan. or Dec.)
 * MM - Month as a zero-padded decimal number (from 01 to 12)
 * M - Month as a decimal number (from 1 to 12)
 *
 * DDDD - Full weekday name (e.g. Monday or Sunday)
 * DDD - Abbreviated weekday name (e.g. Mon. or Sun.)
 * DD - Day of month as a zero-padded decimal number (from 01 to 31)
 * D - Day of month as a decimal number (from 1 to 31)
 *
 * HH - Hours (24-hour clock) as a zero-padded decimal number (from 00 to 23)
 * H - Hours (24-hour clock) as a decimal number (от 0 до 23)
 * hh - Hours (12-hour clock) as a zero-padded decimal number (from 00 to 12)
 * h - Hours (12-hour clock) as a decimal number (from 0 to 12)
 *
 * mm - Minutes as a zero-padded decimal number (from 00 to 59)
 * m - Minutes as a decimal number (from 0 to 59)
 *
 * ss - Seconds as a zero-padded decimal number (from 00 to 59)
 * s - Seconds as a decimal number (from 0 to 59)
 *
 * fff - Fraction of second as zero-padded 3-digit decimal number, milliseconds (from 000 to 999)
 * ff - Fraction of second as zero-padded 2-digit decimal number (from 00 to 99)
 * f - Fraction of second as zero-padded 1-digit decimal number (from 0 to 9)
 *
 * TT - AM/PM
 * tt - am/pm
 *
 * Z - UTC time offset (e.g. +0600)
 *
 * Q - Quarter of year (1, 2, 3 or 4)
 *
 * @example
 *
 * var date = new Date(2015, 1, 1, 13, 29, 6);
 * format(date, 'DD-MM-YYYY HH:mm:ss');
 * // => '01-01-2015 13:29:06'
 *
 * format(date, 'DD.MM.YYYY hh:mm:ss TT');
 * // => '01.01.2015 01:29:06 PM'
 */
export default function (target, pattern, locale) {
    if (!isValid(target)) {
        throw new TypeError('Target must be a valid date!');
    }

    pattern = String(pattern);

    if (pattern.length === 0) {
        return '';
    }

    locale = locale || aliases;

    return pattern.replace(regex, match => tokens[match] !== undefined ? tokens[match](target, locale) : match);
}
