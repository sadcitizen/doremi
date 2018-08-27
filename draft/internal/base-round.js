import isNumber from '../common/is-number';

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
        const prec = Math.pow(10, Math.floor(precision));

        return isNumber(num) ? (fn(num * prec) + 0) / prec : NaN;
    };
}
