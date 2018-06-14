/**
 * @param {Function} fn
 * @param {number} arity
 * @param {...*} args
 * @return {Function}
 */
function curry(fn, arity = fn.length, ...args) {
    if (arity <= args.length) {
        return fn(...args);
    }

    return curry.bind(null, fn, arity, ...args);
}

export default curry;
