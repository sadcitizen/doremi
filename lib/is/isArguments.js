'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type = require('./type');

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `target` is classified as an `arguments`.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is classified as an `arguments`, else `false`.
 *
 * @example
 * function fn() {
 *   return arguments;
 * }
 * isArguments(fn());
 * // => true
 *
 * isArguments(1, 2, 3);
 * // => false
 */
exports.default = function (target) {
  return (0, _type2.default)(target) === 'arguments';
};