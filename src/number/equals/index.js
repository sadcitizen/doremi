import { INVALID_NUMBERS } from '../../constants/errors';
import isNumber from '../../common/is-number';

/**
 * Checks if the value is approximately equal to the other value.
 *
 * @memberOf number
 * @param {number} value The value to compare.
 * @param {number} other The other value to compare.
 * @param {number} accuracy The accuracy of comparison.
 * @returns {boolean} Return `true` if the value is approximately equal to other value, `false` otherwise.
 */
export default function (value, other, accuracy = 0.001) {
    if (!isNumber(value) || !isNumber(other) || !isNumber(accuracy)) {
        throw new TypeError(INVALID_NUMBERS);
    }

    return Math.abs(value - other) < accuracy;
}
