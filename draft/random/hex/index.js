import { HEX_LETTERS, DIGITS } from '../../internal/constants';
import integer from '../integer';

/**
 * Generates a pseudo-random hexadecimal number as string.
 *
 * @category random
 * @param {number} length
 * @return {string}
 */
export default function (length) {
    let result = '';
    const letters = (HEX_LETTERS + DIGITS).split('');
    const size = letters.length;

    let count = length && length > 0 ? length : 1;

    while (count > 0) {
        result += letters[integer(0, size - 1)];
        count -= 1;
    }

    return result;
}
