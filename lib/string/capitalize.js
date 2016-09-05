'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('./stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Capitalizes the first character of `target`.
 *
 * @param {string|*} target The stringify to capitalize.
 * @returns {string} Returns the capitalized stringify.
 *
 * @example
 * capitalize('hi!');
 * // => 'Hi!'
 *
 * capitalize();
 * // => '' (empty stringify)
 */
function capitalize(target) {
  target = (0, _stringify2.default)(target);
  return target.length > 0 ? target.charAt(0).toUpperCase() + target.slice(1) : target;
}

exports.default = capitalize;