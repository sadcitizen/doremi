/**
 * Returns a new function that invokes `fn` while it's called less than `n` and store the result of last call.
 *
 * @param {Function} fn The function to invoke.
 * @param {number} n The number of calls.
 * @return {Function} Return the new function.
 *
 * @example
 * const add = before((x, y) => x + y, 3);
 * add(1, 1);
 * // => 2
 * add(2, 3);
 * // => 5
 * add(3, 7);
 * // => 5 - stored result
 */
export default function (fn, n) {
    let result;

    n |= 0;

    return function (...args) {
        if (--n > 0) {
            result = fn(...args);
        } else {
            fn = null;
        }

        return result;
    };
}
