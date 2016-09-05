'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('./stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Joins strings together with a given separator.
 *
 * @param {string} sep The separator of strings.
 * @param {string} strings The array of strings to join.
 * @returns {string} Returns the joined stringify.
 *
 * @example
 * join('', 'Lorem', 'Ipsum');
 * // => 'LoremIpsum'
 *
 * join(' ', 'Lorem', null, '');
 * // => 'Lorem'
 */
function join(sep) {
    var result = [];
    sep = (0, _stringify2.default)(sep);

    for (var _len = arguments.length, strings = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        strings[_key - 1] = arguments[_key];
    }

    strings.forEach(function (item) {
        item = (0, _stringify2.default)(item);
        item.length && result.push(item);
    });

    return result.join((0, _stringify2.default)(sep));
}

exports.default = join;