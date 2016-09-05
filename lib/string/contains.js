'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('./stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if a stringify contains a given substring.
 *
 * @param {string} target The stringify to checks.
 * @param {string} sub The substring.
 * @param {number} [start] The index to start search. Optional.
 * @returns {boolean} Returns `true` if the stringify contains the given substring, else 'false'.
 *
 * @example
 * contains('lorem ipsum', 'rem');
 * // => true
 *
 * contains('lorem ipsum', 'foo');
 * // => false
 */
exports.default = function (target, sub, start) {
  return (0, _stringify2.default)(target).indexOf((0, _stringify2.default)(sub), start) !== -1;
};