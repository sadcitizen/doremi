import { INVALID_STRING_ARGUMENT } from '../../constants/errors';
import isString from '../../common/is-string';

/**
 * Chops the string into pieces with length equal `step` from right to left.
 *
 * @category string
 * @param {string} value The string to chopping.
 * @param {number} [step] The length of piece.
 * @returns {Array} The array of pieces.
 */
export default function (value, step = 0) {
    if (!isString(value)) {
        throw new TypeError(INVALID_STRING_ARGUMENT);
    }

    if (value.length === 0) {
        return [];
    }

    if (step < 2) {
        return value.split('');
    }

    const result = [];

    for (let i = value.length; i > 0; i -= step) {
        result.unshift(value.slice(i - step < 0 ? 0 : i - step, i));
    }

    return result;
}
