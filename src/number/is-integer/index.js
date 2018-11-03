import { INVALID_NUMBER_ARGUMENT } from '../../constants/errors';
import isNumber from '../../common/is-number';

/**
 * Checks if the given value is an integer number.
 *
 * @memberOf number
 * @param {number} value The value to check.
 * @returns {boolean} Returns `true` if the value is integer number, else `false`.
 */
export default function (value) {
    if (!isNumber(value)) {
        throw new TypeError(INVALID_NUMBER_ARGUMENT);
    }

    return Number.isFinite(value) && value % 1 === 0;
}
