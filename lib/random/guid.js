'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hex = require('./hex');

var _hex2 = _interopRequireDefault(_hex);

var _choice = require('./choice');

var _choice2 = _interopRequireDefault(_choice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generates a pseudo-random Globally Unique Identifier (v4).
 * @returns {string} Returns the guid.
 *
 * @example
 *
 * guid();
 * // => 73e0ddb3-868d-4bb1-a0f6-6cb19536bc43
 *
 * guid();
 * // => 84d82ea7-a8d8-4b94-add5-818650da2ea5
 */

exports.default = function () {
  return (0, _hex2.default)(8) + '-' + (0, _hex2.default)(4) + '-4' + (0, _hex2.default)(3) + '-' + (0, _choice2.default)(8, 9, 'a', 'b') + (0, _hex2.default)(3) + '-' + (0, _hex2.default)(12);
};