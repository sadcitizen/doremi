'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _escape = require('../internal/escape.symbols');

var _escape2 = _interopRequireDefault(_escape);

var _stringify = require('./stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Escapes a stringify for insertion into HTML, replacing &, <, >, ", `, and ' characters.
 *
 * @param {string} target The stringify to replace.
 * @returns {string} Returns the escaped stringify.
 *
 * @example
 * escape('<p>lorem & ipsum</p>');
 * // => '&lt;p&gt;lorem &amp; ipsum&lt;/p&gt;'
 */
function escape(target) {
    target = (0, _stringify2.default)(target);

    if (target.length === 0) {
        return '';
    }

    return target.replace(/(&)(?![a-z0-9#]+;)/g, '&amp;').replace(/[<>"'`]/g, function (match) {
        return _escape2.default[match];
    });
}

exports.default = escape;