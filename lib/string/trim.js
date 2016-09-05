'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _whitespaces = require('../internal/regexes/whitespaces');

var _whitespaces2 = _interopRequireDefault(_whitespaces);

var _stringify = require('./stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Removes leading and trailing whitespaces or given characters from `target`.
 *
 * @param {String} target The stringify to trim.
 * @param {Array} rest The characters to remove.
 * @returns {String} The trimmed stringify.
 *
 * @example
 * trim('   lorem   ');
 * // => 'lorem'
 *
 * trim('*+/lorem/+*', '/', '+*');
 * // => 'lorem'
 */
function trim(target) {
    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
    }

    var chars = rest.join('');
    target = (0, _stringify2.default)(target);

    if (target.length === 0) {
        return '';
    }

    chars = chars.length ? chars : _whitespaces2.default;
    return target.replace(new RegExp('^[' + chars + ']+|[' + chars + ']+$', 'ig'), '');
}

exports.default = trim;