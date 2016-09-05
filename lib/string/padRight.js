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
 * Pads a stringify on the right side if its length is less then
 * the given padding length.
 *
 * @param {string|*} target The stringify to pad.
 * @param {number} length The padding length.
 * @param {string} char The stringify used as padding.
 * @returns {string} Returns the padded stringify.
 *
 * @example
 * padRight('lorem', 8, '^');
 * // => 'lorem^^^'
 *
 * padRight('lorem', 5, '#');
 * // => 'lorem'
 *
 * padRight('lorem', 10);
 * // => 'lorem     '
 */
function padRight(target, length, char) {
  target = (0, _stringify2.default)(target);
  char = ((0, _stringify2.default)(char) || ' ').charAt(0);
  return target.length < (length |= 0) ? target + (0, _repeat2.default)(char, length - target.length) : target;
}

exports.default = padRight;