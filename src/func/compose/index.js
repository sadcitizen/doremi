/**
 * Create a new function that will compose and invoke functions from right to left,
 * passing the return values from each invocation to the next successive function.
 *
 * @param {Function[]} fns Functions to compose from right to left.
 * @returns {Function} Returns new composed function.
 *
 * @example
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
export default (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
