'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pipeline = require('./pipeline');

var _pipeline2 = _interopRequireDefault(_pipeline);

var _reverse = require('../internal/reverse');

var _reverse2 = _interopRequireDefault(_reverse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create a new function that will compose and invoke functions from right-to-left,
 * passing the return values from each invocation to the next successive function.
 *
 * @returns {Function} Returns new function.
 *
 * @example
 *
 * function sum(x, y) {
 *      return x + y;
 * }
 *
 * function square(x) {
 *      return x * x;
 * }
 *
 * var squareOfSum = compose(square, sum);
 * squareOfSum(2, 3);
 * // => 25
 */
function compose() {
  return _pipeline2.default.apply(null, (0, _reverse2.default)(arguments));
}

exports.default = compose;