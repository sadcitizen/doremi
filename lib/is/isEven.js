'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isNumber = require('./isNumber');

var _isNumber2 = _interopRequireDefault(_isNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `target` is an even number.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Return `true` if `target` is an even number, else `false`.
 *
 * @example
 *
 * isEven(null);
 * // => false
 *
 * isEven(21);
 * // => false
 *
 * isEven(20);
 * // => true
 */
exports.default = function (target) {
  return (0, _isNumber2.default)(target) && target % 2 === 0;
};