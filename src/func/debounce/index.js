import { INVALID_FUNCTION_ARGUMENT } from '../../constants/errors';
import isFunction from '../../common/is-function';

/**
 * Creates a debounced function that delays its execution until after `ms` milliseconds have passed.
 * The debounced function comes with a `cancel` method to cancel delayed invocation.
 *
 * @memberOf func
 * @param {Function} fn The function to debounce.
 * @param {number} [ms] The number of milliseconds to delay invocation.
 * @param {boolean} [isLeading]
 * @returns {Function} Returns new debounced function.
 */
export default function (fn, ms = 100, isLeading = false) {
    if (!isFunction(fn)) {
        throw new TypeError(INVALID_FUNCTION_ARGUMENT);
    }

    let timeout = null;
    let result;

    function cancel() {
        clearTimeout(timeout);
        timeout = null;
    }

    function debounced(...args) {
        const that = this;

        if (timeout) {
            clearTimeout(timeout);
        } else if (isLeading) {
            result = fn.apply(that, args);
        }

        timeout = setTimeout(() => {
            if (!isLeading) {
                result = fn.apply(that, args);
            }

            timeout = null;
        }, ms);

        return result;
    }

    debounced.cancel = cancel;

    return debounced;
}
