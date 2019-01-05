import { INVALID_FUNCTION_ARGUMENT } from '../../constants/errors';
import isFunction from '../../common/is-function';

/**
 * Creates a new function that will always invoke `fn` after `ms` milliseconds have passed.
 *
 * @memberOf func
 * @param {Function} fn The function to invoke.
 * @param {number} ms The number of milliseconds to delay invocation.
 * @param {*} [context] The context of invocation.
 * @returns {Function} Returns new delayed function.
 */
export default function (fn, ms, context = null) {
    if (!isFunction(fn)) {
        throw new TypeError(INVALID_FUNCTION_ARGUMENT);
    }

    return function (...args) {
        return setTimeout(() => fn.apply(context, args), ms);
    };
}
