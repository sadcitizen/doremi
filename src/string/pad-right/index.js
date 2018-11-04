import {
    INVALID_STRING_FIRST_ARGUMENT,
    INVALID_NUMBER_SECOND_ARGUMENT,
    INVALID_STRING_THIRD_ARGUMENT
} from '../../constants/errors';
import isNumber from '../../common/is-number';
import isString from '../../common/is-string';
import repeat from '../repeat';

/**
 * Pads the given string on the right side if its length is less then the given padding length.
 *
 * @memberOf string
 * @param {string} value The string to pad.
 * @param {number} [length] The padding length.
 * @param {string} [char] The string used as padding.
 * @returns {string} Returns the padded string.
 */
export default function (value, length = 0, char = ' ') {
    if (!isString(value)) {
        throw new TypeError(INVALID_STRING_FIRST_ARGUMENT);
    }

    if (!isNumber(length)) {
        throw new TypeError(INVALID_NUMBER_SECOND_ARGUMENT);
    }

    if (!isString(char)) {
        throw new TypeError(INVALID_STRING_THIRD_ARGUMENT);
    }

    if (value.length > length) {
        return value;
    }

    if (char.length > 1) {
        char = char.charAt(0); // eslint-disable-line no-param-reassign
    }

    return value + repeat(char, length - value.length);
}
