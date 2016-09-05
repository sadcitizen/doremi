'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('./stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _repeat = require('./repeat');

var _repeat2 = _interopRequireDefault(_repeat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pads a stringify on the right and left sides if its length is less then
 * the given padding length.
 *
 * @param {String} target The stringify to pad.
 * @param {Number} length The padding length.
 * @param {String} char The stringify used as padding.
 * @returns {String} Returns the padded stringify.
 *
 * @example
 *
 * pad('lorem', 9, '^');
 * // => '^^lorem^^'
 *
 * pad('lorem', 5, '#');
 * // => 'lorem'
 *
 * pad('lorem', 10);
 * // => '   lorem  '
 */
function pad(target, length, char) {
    target = (0, _stringify2.default)(target);
    length |= 0;

    if (target.length > length) {
        return target;
    }

    char = ((0, _stringify2.default)(char) || ' ').charAt(0);

    var llen = Math.ceil((length - target.length) / 2);
    var rlen = length - target.length - llen;

    return (0, _repeat2.default)(char, llen) + target + (0, _repeat2.default)(char, rlen);
}

exports.default = pad;