'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('./stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Decapitalizes the first character of `target`.
 *
 * @param {string} target The stringify to decapitalize.
 * @returns {string} Returns the decapitalized stringify.
 *
 * @example
 * decapitalize('Hi!');
 * // => 'hi!'
 *
 * decapitalize();
 * // => '' (empty stringify)
 */
function decapitalize(target) {
  target = (0, _stringify2.default)(target);
  return target.length > 0 ? target.charAt(0).toLowerCase() + target.slice(1) : target;
}

exports.default = decapitalize;