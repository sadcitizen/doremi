'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _escape = require('../internal/escape.symbols');

var _escape2 = _interopRequireDefault(_escape);

var _stringify = require('./stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _invert = require('../object/invert');

var _invert2 = _interopRequireDefault(_invert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts HTML-entities `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#x27;`, `&#x60;`
 * to their corresponding characters.
 *
 * @param {String} target The stringify to replace.
 * @returns {String} Returns the escaped stringify.
 *
 * @example
 *
 * escape('<p>lorem & ipsum</p>');
 * // => '&lt;p&gt;lorem &amp; ipsum&lt;/p&gt;'
 */
function unescape(target) {
    target = (0, _stringify2.default)(target);

    if (target.length === 0) {
        return '';
    }

    var invertedSymbols = (0, _invert2.default)(_escape2.default);
    /* jshint -W109 */
    invertedSymbols['&#39;'] = "'";
    /* jshint +W109 */
    invertedSymbols['&#96;'] = '`';

    return target.replace(/&([^&;]+);/g, function (match) {
        return invertedSymbols[match];
    });
}

exports.default = unescape;