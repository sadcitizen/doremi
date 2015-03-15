import slice from '../internal/slice';
import noop from './noop';

/**
 * Create a new function that will compose and invoke functions from left-to-right,
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
 * var squareOfSum = fn.pipeline(sum, square);
 * squareOfSum(2, 3);
 * // => 25
 */
function pipeline() {
    var fns = slice(arguments);

    return fns.length === 0 ? noop : function () {
        return fns.reduce(function (result, func) {
            return func.call(this, result);
        }, fns.shift().apply(this, arguments));
    };
}

export default pipeline;