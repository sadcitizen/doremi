import { INVALID_FUNCTION_ARGUMENT } from '../../constants/errors';
import isFunction from '../../common/is-function';

/**
 *
 * @memberOf func
 * @param {Function} fn
 * @param {number} threshold
 * @param {boolean} isLeading
 * @returns {Function} Returns new debounced function.
 */
export default function (fn, threshold = 100, isLeading = false) {
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
        }, threshold);

        return result;
    }

    debounced.cancel = cancel;

    return debounced;
}
