'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('./stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `target` starts with `sub`.
 *
 * @param {string} target The stringify to inspect.
 * @param {string} sub The substring to search in `target`.
 * @returns {boolean} Returns `true` if `target` starts with `sub`, else `false`.
 *
 * @example
 * startsWith('lorem', 'lor');
 * // => true
 *
 * startsWith(12345, 2);
 * // => false
 */
exports.default = function (target, sub) {
  return (0, _stringify2.default)(target).indexOf((0, _stringify2.default)(sub)) === 0;
};