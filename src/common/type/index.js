import { UNDEF } from '../../internal/constants';

/**
 * Returns a type of `target`.
 *
 * @param target The value to check.
 * @returns {string} The type of `target`.
 *
 * @example
 * type('');
 * // => string
 *
 * type(42);
 * // => number
 *
 * type({});
 * // => object
 */
export default function (target) {
    if (target === UNDEF) {
        return 'undefined';
    }

    if (target === null) {
        return 'null';
    }

    if (target && (target.nodeType === 1 || target.nodeType === 9)) {
        return 'element';
    }

    const tp = Object.prototype.toString.call(target).slice(8, -1).toLowerCase();

    if (tp === 'number') {
        if (isNaN(target)) {
            return 'nan';
        }
        if (!isFinite(target)) {
            return 'infinity';
        }
    }

    return tp;
}
