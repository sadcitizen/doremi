'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chop = require('./chop');

var _chop2 = _interopRequireDefault(_chop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Reverses a stringify.
 *
 * @param {string} target The stringify to reverse.
 * @returns {string} Returns the reversed stringify.
 *
 * @example
 * reverse('lorem');
 * // => 'merol'
 *
 * reverse(12345);
 * // => '54321'
 */
exports.default = function (target) {
  return (0, _chop2.default)(target).reverse().join('');
};