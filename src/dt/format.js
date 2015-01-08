var valid = require('../is/validDate');
var defined = require('../is/defined');
var string = require('../to/string');
var lpad = require('../st/lpad');
var aliases = require('../internal/datetime.aliases');
var regex = /(Q|Y{1,4}|M{1,4}|D{1,4}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|f{1,3}|T{1,2}|t{1,2}|Z)/g;

function dayOfWeek(date) {
    var day = date.getDay();
    return day === 0 ? 6 : day - 1;
}

var tokens = {
    'YYYY': function (date) {
        return lpad(date.getFullYear(), 4, '0');
    },
    'YYY': function (date) {
        return date.getFullYear();
    },
    'YY': function (date) {
        return lpad(date.getFullYear() % 100, 2, '0');
    },
    'Y': function (date) {
        return date.getFullYear() % 100;
    },
    'MMMM': function (date, aliases) {
        return aliases.months.longs[date.getMonth()];
    },
    'MMM': function (date, aliases) {
        return aliases.months.shorts[date.getMonth()];
    },
    'MM': function (date) {
        return lpad((date.getMonth() + 1) % 100, 2, '0');
    },
    'M': function (date) {
        return (date.getMonth() + 1) % 100;
    },
    'DDDD': function (date, aliases) {
        return aliases.days.longs[dayOfWeek(date)];
    },
    'DDD': function (date, aliases) {
        return aliases.days.shorts[dayOfWeek(date)];
    },
    'DD': function (date) {
        return lpad(date.getDate() % 100, 2, '0');
    },
    'D': function (date) {
        return date.getDate();
    },
    'HH': function (date) {
        return lpad(date.getHours(), 2, '0');
    },
    'H': function (date) {
        return date.getHours();
    },
    'hh': function (date) {
        var hours = date.getHours();
        return lpad(hours <= 12 ? hours : hours - 12, 2, '0');
    },
    'h': function (date) {
        var hours = date.getHours();
        return hours <= 12 ? hours : hours - 12;
    },
    'mm': function (date) {
        return lpad(date.getMinutes(), 2, '0');
    },
    'm': function (date) {
        return date.getMinutes();
    },
    'ss': function (date) {
        return lpad(date.getSeconds(), 2, '0');
    },
    's': function (date) {
        return date.getSeconds();
    },
    'fff': function (date) {
        return lpad(date.getMilliseconds(), 3, '0');
    },
    'ff': function (date) {
        return lpad((date.getMilliseconds() / 10) | 0, 2, '0');
    },
    'f': function (date) {
        return (date.getMilliseconds() / 100) | 0;
    },
    'TT': function (date) {
        return date.getHours() >= 12 ? 'PM' : 'AM';
    },
    'tt': function (date) {
        return date.getHours() >= 12 ? 'pm' : 'am';
    },
    'Q': function (date) {
        return Math.ceil((date.getMonth() + 1) / 3);
    },
    'Z': function (date) {
        var offset = date.getTimezoneOffset();
        var abs = Math.abs(offset);
        return (offset > 0 ? '-' : '+') + lpad((abs / 60) | 0, 2, '0') + lpad(abs % 60, 2, '0');
    }
};

/**
 * Formats a date to a string according to `pattern`.
 *
 * @param {Date} target The date to format.
 * @param {String} pattern The string of tokens.
 * @param {Object} locale The localization.
 * @returns {String} Returns the string with formatted date.
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
 * dt.format(date, 'DD-MM-YYYY HH:mm:ss');
 * // => '01-01-2015 13:29:06'
 *
 * dt.format(date, 'DD.MM.YYYY hh:mm:ss TT');
 * // => '01.01.2015 01:29:06 PM'
 */
module.exports = function format(target, pattern, locale) {
    if (!valid(target)) {
        throw new TypeError('Target must be a valid date!');
    }

    pattern = string(pattern);

    if (pattern.length === 0) {
        return '';
    }

    locale = locale || aliases;

    return pattern.replace(regex, function (match) {
        return defined(tokens[match]) ? tokens[match](target, locale) : match;
    });
};