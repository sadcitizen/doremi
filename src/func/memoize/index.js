import isFunction from '../../common/is-function';
import { INVALID_FUNCTION_ARGUMENT } from '../../constants/errors';

/**
 * Creates a new function that caches invocations of `fn`.
 *
 * @memberOf func
 * @param {Function} fn The function to have its output memoized.
 * @param {Function} resolver The function to resolve the cache key.
 * @return {Function} Returns the memoized function.
 */
export default function (fn, resolver = JSON.stringify) {
    if (!isFunction(fn)) {
        throw new TypeError(INVALID_FUNCTION_ARGUMENT);
    }

    fn.memo = fn.memo || {};

    return (...args) => {
        const key = resolver(args);

        if (!(key in fn.memo)) {
            fn.memo[key] = fn(...args);
        }

        return fn.memo[key];
    };
}
