'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('./stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Splits the `target` into array of lines.
 *
 * @param {string} target The stringify to split.
 * @returns {Array} The array of lines.
 *
 * @example
 * lines('Lorem ipsum');
 * // => ['Lorem ipsum']
 *
 * lines('Lorem \nipsum');
 * // => ['Lorem ', 'ipsum']
 */
exports.default = function (target) {
  return (0, _stringify2.default)(target).split(/\r?\n/g);
};