import { INVALID_FUNCTION_ARGUMENT } from '../../constants/errors';
import isFunction from '../../common/is-function';

/**
 * Return a new function that invokes `fn` with `args` prepended to the arguments it receives.
 *
 * @param {Function} fn The function to partially apply.
 * @param {...*} args The arguments to be partially applied.
 * @returns {Function} Returns new partially applied function.
 */
export default function (fn, ...args) {
    if (!isFunction(fn)) {
        throw new TypeError(INVALID_FUNCTION_ARGUMENT);
    }

    return (...partialArgs) => fn(...args, ...partialArgs);
}
