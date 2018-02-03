/**
 * Return a new function which accepts arguments in the reverse order that the original function specifies.
 * @param  {Function} fn The function which needs to accept arguments in reverse order.
 * @return {Function} The new function.
 *
 * @example
 * const divide = (x, y) => x / y;
 * const flippedDivide = flip(divide);
 *
 * divide(100, 10);
 * // => 10
 * flippedDivide(100, 10);
 * // => 0.1
 */
export default fn => (...args) => fn(...args.reverse());
