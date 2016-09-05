'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isNumber = require('./isNumber');

var _isNumber2 = _interopRequireDefault(_isNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `target` is float.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is float, else 'false'.
 *
 * @example
 *
 * isFloat(42);
 * // => false
 *
 * isFloat(42.42);
 * // => true
 *
 * isFloat('42.42');
 * // => false
 */
exports.default = function (target) {
  return (0, _isNumber2.default)(target) && target % 1 !== 0;
};