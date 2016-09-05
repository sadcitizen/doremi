'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _whitespaces = require('../internal/regexes/whitespaces');

var _whitespaces2 = _interopRequireDefault(_whitespaces);

var _isString = require('./isString');

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WHITESPACES_REGEX = new RegExp('^[' + _whitespaces2.default + ']*$');

/**
 * Checks if `target` is a blank string.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is a blank string, else 'false'.
 *
 * @example
 *
 * isBlankString('');
 * // => true
 *
 * isBlankString('{"a":"b","c":"d"}');
 * // => false
 *
 * isBlankString('     \t    \n ');
 * // => true
 */

exports.default = function (target) {
  return (0, _isString2.default)(target) && WHITESPACES_REGEX.test(target);
};