import { INVALID_FUNCTION_ARGUMENT } from '../../constants/errors';
import isFunction from '../../common/is-function';

/**
 * memberOf func
 * @param {Function} fn The function to schedule.
 * @param scheduler
 * @param context
 * @returns {Function} Returns new scheduled function.
 */
export default function (fn, scheduler, context = null) {
    if (!isFunction(fn)) {
        throw new TypeError(INVALID_FUNCTION_ARGUMENT);
    }

    function scheduled(...args) {

    }

    function cancel() {

    }

    function reset() {

    }

    scheduled.cancel = cancel;
    scheduled.reset = reset;

    return scheduled;
}
