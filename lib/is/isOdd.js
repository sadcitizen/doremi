'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isNumber = require('./isNumber');

var _isNumber2 = _interopRequireDefault(_isNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `target` is an odd number.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Return `true` if `target` is an odd number, else `false`.
 *
 * @example
 *
 * isOdd(null);
 * // => false
 *
 * isOdd(21);
 * // => true
 *
 * isOdd(20);
 * // => false
 */
exports.default = function (target) {
  return (0, _isNumber2.default)(target) && target % 2 !== 0;
};