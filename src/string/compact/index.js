import whitespaces from '../../constants/whitespaces';
import trim from '../trim';

const rgx = new RegExp(`[${whitespaces}]+`, 'ig');

/**
 * Replaces whitespaces in the given string to a single space and trims the ends.
 *
 * @memberOf string
 * @param {string} value The string to inspect.
 * @returns {string} The compacted string.
 */
export default function (value) {
    return trim(value).replace(rgx, ' ');
}
