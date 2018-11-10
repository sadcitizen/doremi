import { INVALID_STRING_ARGUMENT } from '../../constants/errors';
import isString from '../../common/is-string';
import trim from '../trim';

/**
 * Truncates the given string if it is longer than the given maximum string length.
 *
 * @memberOf string
 * @param {string} value The string to truncate.
 * @param {number} limit The maximum string length.
 * @param {string} [sfx] The string to indicate text is omitted. Defaults is '...'.
 * @param {boolean} [safe] If it should not break words. Default is `false`.
 * @returns {string} Returns the truncated string.
 *
 * truncate('lorem ipsum dolor sit amet', 10, null, true);
 * // => 'lorem...'
 */
export default function (value, limit = 0, sfx, safe = false) {
    if (!isString(value)) {
        throw new TypeError(INVALID_STRING_ARGUMENT);
    }

    if (value.length <= limit) {
        return value;
    }

    sfx = sfx || '...'; // eslint-disable-line no-param-reassign

    let result = value.slice(0, limit - sfx.length + (safe ? 1 : 0));

    result = safe ? result.slice(0, result.lastIndexOf(' ')) : trim(result);

    return result + sfx;
}
