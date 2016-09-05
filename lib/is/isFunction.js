'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type = require('./type');

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `target` is function.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Return `true` if `target` is function, else `false`.
 *
 * @example
 *
 * isFunction(null);
 * // => false
 *
 * function noop() {}
 * isFunction(noop);
 * // => true
 *
 * isFunction(Math.abs);
 * // => true
 */
exports.default = function (target) {
  return (0, _type2.default)(target) === 'function';
};