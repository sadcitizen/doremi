import delay from '../delay';

/**
 * Creates a new function that invoked at the end of the event loop.
 *
 * @memberOf func
 * @param {Function} fn The function to invoke.
 * @param {*} [context] The context of invocation.
 * @returns {Function} Returns new delayed function.
 */
export default (fn, context = null) => delay(fn, 1, context);
