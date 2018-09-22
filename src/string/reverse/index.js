import isString from '../../common/is-string';

/**
 * Reverses a string.
 *
 * @category string
 * @param {string} value The string to reverse.
 * @returns {string} Returns the reversed string.
 */
export default function (value) {
    if (!isString(value)) {
        throw new TypeError('Argument is not a string');
    }

    return value.split('').reverse().join('');
}
