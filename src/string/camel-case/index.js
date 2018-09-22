import { INVALID_STRING_ARGUMENT } from '../../constants/errors';
import isString from '../../common/is-string';

/**
 * Converts the given string to camel case.
 *
 * @category string
 * @param {string} value The string to convert.
 * @returns {string} Returns camel case string.
 */
export default function (value) {
    if (!isString(value)) {
        throw new TypeError(INVALID_STRING_ARGUMENT);
    }

    if (value.length === 0) {
        return '';
    }

    return value.toLowerCase()
        .replace(/[-_]+/g, ' ')
        .replace(/[^\w\s]+/g, ' ')
        .replace(/\s(.)/g, x => x.toUpperCase())
        .replace(/\s/g, '')
        .replace(/^(.)/, x => x.toLowerCase());
}
