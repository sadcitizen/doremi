import { INVALID_NUMBERS } from '../../constants/errors';
import isNumber from '../../common/is-number';

/**
 * Formats a number using fixed-point notation (like Number.toFixed(), but without rounding).
 *
 * @memberOf number
 * @param {number} value The number to format.
 * @param {number} [digits] The number of digits to appear after the decimal point.
 * @returns {string} Returns the formatted number as string.
 */
export default (value, digits = 2) => {
    if (!isNumber(value) || !isNumber(digits)) {
        throw new TypeError(INVALID_NUMBERS);
    }

    if (digits > 0) {
        return value.toFixed(digits + 1).slice(0, -1);
    }

    return value.toFixed(1).slice(0, -2);
};
