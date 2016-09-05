'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isString = require('./isString');

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HEX_REGEX = /^[a-fA-F0-9]+$/;

/**
 * Checks if `target` is a hex string.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is a hex string, else 'false'.
 *
 * @example
 *
 * isHex('42');
 * // => true
 *
 * isHex('00ffcc');
 * // => true
 *
 * isHex('99zzxx');
 * // => false
 */

exports.default = function (target) {
  return (0, _isString2.default)(target) && HEX_REGEX.test(target);
};