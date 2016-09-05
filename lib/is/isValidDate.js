'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isDate = require('./isDate');

var _isDate2 = _interopRequireDefault(_isDate);

var _isNan = require('./isNan');

var _isNan2 = _interopRequireDefault(_isNan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `target` is a valid date.
 *
 * @param target The value to check.
 * @returns {boolean} Returns `true` if value is a valid date, else `false`.
 *
 * @example
 *
 * isValidDate('');
 * // => false
 *
 * isValidDate(new Date());
 * // => true
 *
 * isValidDate(new Date('date'));
 * // => false
 */
exports.default = function (target) {
  return (0, _isDate2.default)(target) && !(0, _isNan2.default)(target.getTime());
};