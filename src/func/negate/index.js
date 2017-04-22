/**
 * Returns a new function that negates the result of the predicate.
 *
 * @param {Function} fn The predicate to negate.
 * @return {Function} The new negated function.
 *
 * const isEven = x => x & 1;
 * const isOdd = negate(isEven);
 * [1, 2, 3, 4, 5, 6].filter(isOdd);
 * // => [1, 3, 5]
 */
export default fn => (...args) => !fn(...args);
