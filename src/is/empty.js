import type from './type';
import exists from './exists';

/**
 * Check if `target` is empty.
 * Returns `true` is `target` is not an enumerable value or array, string
 * with a length greater than `0` or an object without own enumerable properties.
 *
 * @param target The value to check.
 * @returns {boolean} Returns `true` if `target` is empty, else 'false'.
 *
 * @example
 *
 * is.empty('');
 * // => true
 *
 * is.empty([]);
 * // => true
 *
 * is.empty({});
 * // => true
 */
function empty(target) {
    if (!exists(target)) {
        return true;
    }

    var tp = type(target);

    if (tp === 'array' || tp === 'string' || tp === 'arguments') {
        return target.length === 0;
    }

    if (tp === 'object') {
        for (var key in target) {
            if (target.hasOwnProperty(key)) {
                return false;
            }
        }
    }

    return true;
}

export default empty;