/**
 * Create a new function that will compose and invoke functions from left to right,
 * passing the return values from each invocation to the next successive function.
 *
 * @memberOf func
 * @params {Function[]} fns The array of functions to compose.
 * @returns {Function} Returns new composed function.
 */
export default (...fns) => initial => fns.reduce((f, g) => g(f), initial);
