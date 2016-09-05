'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isExists = require('../is/isExists');

var _isExists2 = _interopRequireDefault(_isExists);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a copy of the `target` without any `null` or `undefined` values.
 *
 * @param target The array to compact.
 * @returns {Array}
 *
 * @example
 *
 * compact([1, 2, 3]);
 * // => [1, 2, 3]
 *
 * compact([null, undefined, 1, false]);
 * // => [1, false]
 */
exports.default = function (target) {
  return target.filter(_isExists2.default);
};