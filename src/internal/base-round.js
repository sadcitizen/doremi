import isNumber from '../number/is-number';

/**
 * Creates a `ceil`, `round` or `floor` function.
 *
 * @private
 * @param {string} target The name of the `Math` method.
 * @returns {Function} Returns the new round function.
 */
export default function (target) {
    const fn = Math[target];
    return function (num, precision = 0) {
        precision = Math.pow(10, precision | 0);
        return isNumber(num) ? (fn(num * precision) + 0) / precision : NaN;
    };
}
