'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isString = require('./isString');

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `target` is a char.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is a char, else 'false'.
 *
 * @example
 *
 * isChar(false);
 * // => false
 *
 * isChar(42);
 * // => false
 *
 * isChar('42');
 * // => false
 *
 * isChar('4');
 * // => true
 */
exports.default = function (target) {
  return (0, _isString2.default)(target) && target.length === 1;
};