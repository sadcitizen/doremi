'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type = require('./type');

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var primitives = ['boolean', 'number', 'string', 'undefined', 'null'];

/**
 * Checks if `target` is a primitive value.
 * Primitive values are booleans, numbers, strings, `undefined` and `null`.
 * Equivalent object wrappers for primitive values are also primitive.
 *
 * @param target The value to check.
 * @returns {boolean} Returns `true` if `target` is a primitive, else `false`.
 *
 * @example
 *
 * isPrimitive(42);
 * // => true
 *
 * isPrimitive([]);
 * // => false
 */

exports.default = function (target) {
  return primitives.indexOf((0, _type2.default)(target)) !== -1;
};