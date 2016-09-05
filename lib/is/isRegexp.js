'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type = require('./type');

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `target` is regexp.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is regexp, else 'false'.
 *
 * @example
 *
 * isRegexp('\d');
 * // => false
 *
 * isRegexp(/\d+/);
 * // => true
 *
 * isRegexp(new Regexp('0-9', 'ig'));
 * // => true
 */
exports.default = function (target) {
  return (0, _type2.default)(target) === 'regexp';
};