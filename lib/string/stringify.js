'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isExists = require('../is/isExists');

var _isExists2 = _interopRequireDefault(_isExists);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a stringify representation of `target`.
 *
 * @param {*} target The value to convert.
 * @returns {string} The stringify representation of `target`.
 *
 * @example
 *
 * stringify(123);
 * // => '123'
 *
 * stringify(null);
 * // => ''
 *
 * stringify(undefined);
 * // => ''
 *
 * stringify(/[a-z0-9]/igm);
 * // => '/[a-z0-9]/gim'
 */
//TODO: Array, Object, Date, Function
exports.default = function (target) {
  return !(0, _isExists2.default)(target) ? '' : target.toString();
};