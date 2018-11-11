import before from '../before';

/**
 * Creates a new function that invokes once and store the result of last call.
 *
 * @memberOf func
 * @param {Function} fn The function to invoke.
 * @return {Function} Returns the new restricted function.
 */
export default function (fn) {
    return before(fn, 2);
}
