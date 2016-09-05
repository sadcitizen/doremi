'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isValidDate = require('../is/isValidDate');

var _isValidDate2 = _interopRequireDefault(_isValidDate);

var _isUndefined = require('../is/isUndefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _stringify = require('../string/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _padLeft = require('../string/padLeft');

var _padLeft2 = _interopRequireDefault(_padLeft);

var _datetime = require('../internal/datetime.aliases');

var _datetime2 = _interopRequireDefault(_datetime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var regex = /(Q|Y{1,4}|M{1,4}|D{1,4}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|f{1,3}|T{1,2}|t{1,2}|Z)/g;

function dayOfWeek(date) {
    var day = date.getDay();
    return day === 0 ? 6 : day - 1;
}

var tokens = {
    'YYYY': function YYYY(date) {
        return (0, _padLeft2.default)(date.getFullYear(), 4, '0');
    },

    'YYY': function YYY(date) {
        return date.getFullYear();
    },

    'YY': function YY(date) {
        return (0, _padLeft2.default)(date.getFullYear() % 100, 2, '0');
    },

    'Y': function Y(date) {
        return date.getFullYear() % 100;
    },

    'MMMM': function MMMM(date, aliases) {
        return aliases.months.longs[date.getMonth()];
    },

    'MMM': function MMM(date, aliases) {
        return aliases.months.shorts[date.getMonth()];
    },

    'MM': function MM(date) {
        return (0, _padLeft2.default)((date.getMonth() + 1) % 100, 2, '0');
    },

    'M': function M(date) {
        return (date.getMonth() + 1) % 100;
    },

    'DDDD': function DDDD(date, aliases) {
        return aliases.days.longs[dayOfWeek(date)];
    },

    'DDD': function DDD(date, aliases) {
        return aliases.days.shorts[dayOfWeek(date)];
    },

    'DD': function DD(date) {
        return (0, _padLeft2.default)(date.getDate() % 100, 2, '0');
    },

    'D': function D(date) {
        return date.getDate();
    },

    'HH': function HH(date) {
        return (0, _padLeft2.default)(date.getHours(), 2, '0');
    },

    'H': function H(date) {
        return date.getHours();
    },

    'hh': function hh(date) {
        var hours = date.getHours();
        return (0, _padLeft2.default)(hours <= 12 ? hours : hours - 12, 2, '0');
    },

    'h': function h(date) {
        var hours = date.getHours();
        return hours <= 12 ? hours : hours - 12;
    },

    'mm': function mm(date) {
        return (0, _padLeft2.default)(date.getMinutes(), 2, '0');
    },

    'm': function m(date) {
        return date.getMinutes();
    },

    'ss': function ss(date) {
        return (0, _padLeft2.default)(date.getSeconds(), 2, '0');
    },

    's': function s(date) {
        return date.getSeconds();
    },

    'fff': function fff(date) {
        return (0, _padLeft2.default)(date.getMilliseconds(), 3, '0');
    },

    'ff': function ff(date) {
        return (0, _padLeft2.default)(date.getMilliseconds() / 10 | 0, 2, '0');
    },

    'f': function f(date) {
        return date.getMilliseconds() / 100 | 0;
    },

    'TT': function TT(date) {
        return date.getHours() >= 12 ? 'PM' : 'AM';
    },

    'tt': function tt(date) {
        return date.getHours() >= 12 ? 'pm' : 'am';
    },

    'Q': function Q(date) {
        return Math.ceil((date.getMonth() + 1) / 3);
    },

    'Z': function Z(date) {
        var offset = date.getTimezoneOffset();
        var abs = Math.abs(offset);
        return (offset > 0 ? '-' : '+') + (0, _padLeft2.default)(abs / 60 | 0, 2, '0') + (0, _padLeft2.default)(abs % 60, 2, '0');
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
function format(target, pattern, locale) {
    if (!(0, _isValidDate2.default)(target)) {
        throw new TypeError('Target must be a valid date!');
    }

    pattern = (0, _stringify2.default)(pattern);

    if (pattern.length === 0) {
        return '';
    }

    locale = locale || _datetime2.default;

    return pattern.replace(regex, function (match) {
        return !(0, _isUndefined2.default)(tokens[match]) ? tokens[match](target, locale) : match;
    });
}

exports.default = format;