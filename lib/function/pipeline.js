'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _noop = require('./noop');

var _noop2 = _interopRequireDefault(_noop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create a new function that will compose and invoke functions from left-to-right,
 * passing the return values from each invocation to the next successive function.
 *
 * @params {Array} The list of functions.
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
 * var squareOfSum = pipeline(sum, square);
 * squareOfSum(2, 3);
 * // => 25
 */
function pipeline() {
    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
        fns[_key] = arguments[_key];
    }

    return fns.length === 0 ? _noop2.default : function () {
        var _this = this;

        return fns.reduce(function (result, func) {
            return func.call(_this, result);
        }, fns.shift().apply(undefined, arguments));
    };
}

exports.default = pipeline;