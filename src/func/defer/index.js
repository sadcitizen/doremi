import delay from '../delay';

/**
 * Creates a new function that invoked at the end of the event loop.
 *
 * @category func
 * @param {Function} fn The function to invoke.
 * @param {*} [context] The context of invocation.
 * @returns {Function} Returns new delayed function.
 */
export default function (fn, context = null) {
    return delay(fn, 1, context);
}
