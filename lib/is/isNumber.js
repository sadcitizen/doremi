'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type = require('./type');

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `target` is number.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is number, else 'false'.
 *
 * @example
 *
 * isNumber(false);
 * // => false
 *
 * isNumber(42);
 * // => true
 *
 * isNumber('42');
 * // => false
 */
exports.default = function (target) {
  return (0, _type2.default)(target) === 'number';
};