'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _trim = require('./trim');

var _trim2 = _interopRequireDefault(_trim);

var _whitespaces = require('../internal/regexes/whitespaces');

var _whitespaces2 = _interopRequireDefault(_whitespaces);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Cleans a stringify from whitespaces.
 *
 * @param {string} target The stringify to cleaning.
 * @returns {string} The cleaned stringify.
 *
 * @example
 * clean('\0 \b \t \n \v \f \r');
 * // => ''
 *
 * clean('           Hello,      World!             ');
 * // => 'Hello, World!'
 */
function clean(target) {
    target = (0, _trim2.default)(target);

    if (target.length === 0) {
        return '';
    }

    return target.replace(new RegExp('[' + _whitespaces2.default + ']+', 'ig'), ' ');
}

exports.default = clean;