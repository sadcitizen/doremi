'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (target) {
    var precision = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];
    var dict = arguments.length <= 2 || arguments[2] === undefined ? symbols : arguments[2];

    if (!(0, _isNumber2.default)(target)) {
        return '';
    }

    var basis = (0, _floor2.default)((0, _log2.default)(Math.abs(target), base) / 3) * 3;

    return (0, _fixed2.default)(target / Math.pow(base, basis), precision) + dict[prefixes[basis]];
};

var _isNumber = require('../is/isNumber');

var _isNumber2 = _interopRequireDefault(_isNumber);

var _log = require('../math/log');

var _log2 = _interopRequireDefault(_log);

var _floor = require('../math/floor');

var _floor2 = _interopRequireDefault(_floor);

var _fixed = require('./fixed');

var _fixed2 = _interopRequireDefault(_fixed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var symbols = {
    kilo: 'k', // 1000 ^ 1
    mega: 'M', // 1000 ^ 2
    giga: 'G', // 1000 ^ 3
    tera: 'T', // 1000 ^ 4
    peta: 'P', // 1000 ^ 5
    exa: 'E', // 1000 ^ 6
    zeta: 'Z', // 1000 ^ 7
    yotta: 'Y' // 1000 ^ 8
};

var prefixes = {
    3: 'kilo',
    6: 'mega',
    9: 'giga',
    12: 'tera',
    15: 'peta',
    18: 'exa',
    21: 'zeta',
    24: 'yotta'
};

var base = 10;

/**
 * Creates the abbreviated number as string.
 *
 * @param {number} target The number to abbreviate.
 * @param {number} precision
 * @param {object} dict
 * @returns {string} Returns the abbreviated number.
 *
 * @example
 *
 * abbreviate(2300);
 * // => '2.3k'
 *
 * abbreviate(1000000);
 * // => '1M'
 */