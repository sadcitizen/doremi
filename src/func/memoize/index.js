/**
 * Return a new function that caches invocations of `fn`.
 * The default resolver is JSON.stringify.
 *
 * @param {Function} fn The function to memoize.
 * @param {Function} resolver The function to resolve the cache key.
 * @return {Function} Returns the new memoized function.
 *
 * @example
 * const sum = (x, y) => x + y;
 * const memoizedSum = memoize(sum);
 *
 * memoizedSum(2, 2);
 * // => 4
 *
 * memoizedSum(2, 2);
 * // => 4, without invocation of `sum`
 */
export default function memoize(fn, resolver = JSON.stringify) {
    fn._cache = fn._cache || {};

    return (...args) => {
        const key = resolver(args);

        return key in fn._cache ? fn._cache[key] : (fn._cache[key] = fn(...args));
    };
}
