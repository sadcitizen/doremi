import isNumber from '../../common/is-number';

/**
 * Checks if the given value is an integer number.
 *
 * @category number
 * @param {number} value The value to check.
 * @returns {boolean} Returns `true` if the value is integer number, else `false`.
 */
export default function (value) {
    if (!isNumber(value)) {
        throw new Error('A number is expected');
    }

    return Number.isFinite(value) && value % 1 === 0;
}
