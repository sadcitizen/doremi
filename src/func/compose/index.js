/**
 * Create a new function that will compose and invoke functions from right to left,
 * passing the return values from each invocation to the next successive function.
 *
 * @memberOf func
 * @param {Function[]} fns The array of functions to compose.
 * @returns {Function} Returns new composed function.
 */
export default (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
