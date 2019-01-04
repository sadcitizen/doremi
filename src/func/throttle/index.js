import { INVALID_FUNCTION_ARGUMENT } from '../../constants/errors';
import isFunction from '../../common/is-function';

const defaultOptions = {
    leading: true,
    trailing: true
};

/**
 *
 * @memberOf func
 * @param {Function} fn
 * @param {number} threshold
 * @param options
 * @returns {Function} Returns new throttled function.
 */
export default function (fn, threshold = 0, options = {}) {
    if (!isFunction(fn)) {
        throw new TypeError(INVALID_FUNCTION_ARGUMENT);
    }

    const opts = { ...defaultOptions, ...options };

    function throttled(...args) {

    }

    function cancel() {

    }

    throttled.cancel = cancel;

    return throttled;
}
