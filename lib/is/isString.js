'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type = require('./type');

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `target` is string.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is string, else 'false'.
 *
 * @example
 *
 * isString(false);
 * // => false
 *
 * isString(42);
 * // => false
 *
 * isString('42');
 * // => true
 */
exports.default = function (target) {
  return (0, _type2.default)(target) === 'string';
};