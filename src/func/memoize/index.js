/**
 * @param {Function} fn
 * @param {Function} resolver
 * @return {Function}
 */
export default function (fn, resolver = JSON.stringify) {
    fn.memo = fn.memo || {};

    return (...args) => {
        const key = resolver(args);

        if (!(key in fn.memo)) {
            fn.memo[key] = fn(...args);
        }

        return fn.memo[key];
    };
}
