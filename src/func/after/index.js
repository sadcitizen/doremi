/**
 * Return a new function that invokes `fn` once it's called `times` or more times.
 *
 * @param {Function} fn The function to call.
 * @param {number} times The number of call before `fn` is invoked.
 * @return {Function} Returns the new function.
 *
 * @example
 * const log = after(console.log, 2);
 * log();
 * log('hi!');
 * // => 'hi!'
 */
export default function (fn, times) {
    times |= 0;

    return function (...args) {
        if (--times < 1) {
            return fn(...args);
        }
    };
}
