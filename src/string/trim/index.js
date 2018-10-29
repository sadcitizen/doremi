import { INVALID_STRING_ARGUMENT } from '../../constants/errors';
import whitespaces from '../../constants/whitespaces';
import isString from '../../common/is-string';

/**
 * Removes leading and trailing whitespaces or given characters from given string.
 *
 * @category string
 * @param {string} value The string to trim.
 * @param {string} [characters] The characters to remove.
 * @returns {String} The trimmed string.
 */
export default function (value, characters = whitespaces) {
    if (!isString(value)) {
        throw new TypeError(INVALID_STRING_ARGUMENT);
    }

    if (value.length === 0) {
        return '';
    }

    const chars = characters.length ? characters : whitespaces;

    return value.replace(new RegExp(`^[${chars}]+|[${chars}]+$`, 'ig'), '');
}
