/**
 * Create a new function that will compose and invoke functions from left to right,
 * passing the return values from each invocation to the next successive function.
 *
 * @params {Function[]} fns Functions to compose from left to right.
 * @returns {Function} Returns new function.
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
 * var squareOfSum = pipe(sum, square);
 * squareOfSum(2, 3);
 * // => 25
 */
export default (...fns) => initial => fns.reduce((f, g) => g(f), initial);
