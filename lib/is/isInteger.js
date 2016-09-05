'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isNumber = require('./isNumber');

var _isNumber2 = _interopRequireDefault(_isNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `target` is integer.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is integer, else 'false'.
 *
 * @example
 *
 * isInteger(42);
 * // => true
 *
 * isInteger(42.42);
 * // => false
 *
 * isInteger('42');
 * // => false
 */
exports.default = function (target) {
  return (0, _isNumber2.default)(target) && target % 1 === 0;
};