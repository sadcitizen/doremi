import { INVALID_NUMBERS } from '../../constants/errors';
import isNumber from '../../common/is-number';
import ternary from '../../logic/ternary';

/**
 * Clamps the given number within bounds.
 *
 * @category number
 * @param {number} value The value to clamp.
 * @param {number} min The minimal bound.
 * @param {number} max The maximum bound.
 * @returns {number} Returns number clamped within bounds.
 */
export default function (value, min, max) {
    if (!isNumber(value) || !isNumber(min) || !isNumber(max)) {
        throw new TypeError(INVALID_NUMBERS);
    }

    return ternary(value < min, min, ternary(value > max, max, value));
}
