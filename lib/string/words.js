'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('./stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _clean = require('./clean');

var _clean2 = _interopRequireDefault(_clean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns the array of words form `target`.
 *
 * @param {string} target The stringify to separate.
 * @param {string} sep The separator.
 * @returns {Array} The array of words.
 *
 * @example
 * words('lorem ipsum dolor sit');
 * // => ['lorem', 'ipsum', 'dolor', 'sit']
 *
 * words('lorem/ipsum/dolor/sit', '/');
 * // => ['lorem', 'ipsum', 'dolor', 'sit']
 */
function words(target, sep) {
    target = (0, _clean2.default)(target);
    sep = (0, _stringify2.default)(sep);

    if (target.length === 0) {
        return [];
    }

    return target.split(sep.length ? sep : ' ');
}

exports.default = words;