'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type = require('./type');

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `target` is array.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is array, else `false`.
 *
 * @example
 *
 * isArray([]);
 * // => true
 *
 * isArray(42);
 * // => false
 */
var isArray = function isArray(target) {
  return (0, _type2.default)(target) === 'array';
};

exports.default = Array.isArray || isArray;