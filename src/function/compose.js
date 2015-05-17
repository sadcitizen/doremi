import pipeline from './pipeline';
import reverse from '../internal/reverse';

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
    return pipeline.apply(null, reverse(arguments));
}

export default compose;