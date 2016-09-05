'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isUndefined = require('./isUndefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _isNull = require('./isNull');

var _isNull2 = _interopRequireDefault(_isNull);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `target` is 'null' or `undefined`.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Return `true` if `target` is not `null` and `undefined`, else `false`.
 *
 * @example
 *
 * isExists(null);
 * // => false
 *
 * isExists('');
 * // => true
 */
exports.default = function (target) {
  return !(0, _isUndefined2.default)(target) && !(0, _isNull2.default)(target);
};