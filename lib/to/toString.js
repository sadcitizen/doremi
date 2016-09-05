'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isExists = require('../is/isExists');

var _isExists2 = _interopRequireDefault(_isExists);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a string representation of `target`.
 *
 * @param {*} target The value to convert.
 * @returns {String} The string representation of `target`.
 *
 * @example
 *
 * toString(123);
 * // => '123'
 *
 * toString(null);
 * // => ''
 *
 * toString(undefined);
 * // => ''
 *
 * toString(/[a-z0-9]/igm);
 * // => '/[a-z0-9]/gim'
 */
//TODO: Array, Object, Date, Function
exports.default = function (target) {
  return !(0, _isExists2.default)(target) ? '' : target.toString();
};