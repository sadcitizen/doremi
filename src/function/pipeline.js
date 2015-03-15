import noop from './noop';

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
 * var squareOfSum = fn.pipeline(sum, square);
 * squareOfSum(2, 3);
 * // => 25
 */
function pipeline(...fns) {
    return fns.length === 0 ? noop : function () {
        return fns.reduce((result, func) => func.call(this, result), fns.shift().apply(this, arguments));
    };
}

export default pipeline;