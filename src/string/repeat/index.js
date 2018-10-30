import { INVALID_NUMBER_ARGUMENT, INVALID_STRING_ARGUMENT } from '../../constants/errors';
import isString from '../../common/is-string';
import isNumber from '../../common/is-number';

/* eslint-disable no-bitwise */
/**
 * Repeats the given string number of `times`.
 *
 * @category string
 * @param {string} value The string to repeat.
 * @param {number} [times] The number of times to repeat.
 * @returns {string} Returns the repeated string.
 */
export default function (value, times = 1) {
    if (!isString(value)) {
        throw new TypeError(INVALID_STRING_ARGUMENT);
    }

    if (!isNumber(times)) {
        throw new TypeError(INVALID_NUMBER_ARGUMENT);
    }

    let result = '';

    if (value.length === 0 || times < 1) {
        return result;
    }

    for (; times > 0; times >>>= 1, value += value) { // eslint-disable-line no-param-reassign
        if ((times & 1) === 1) {
            result += value;
        }
    }

    return result;
}
/* eslint-enable no-bitwise */
