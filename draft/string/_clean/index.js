import trim from '../_trim';
import whitespaces from '../../internal/regexes/whitespaces';

/**
 * Cleans a string from whitespaces.
 *
 * @param {string} target The string to cleaning.
 * @returns {string} The cleaned string.
 *
 * @example
 * clean('\0 \b \t \n \v \f \r');
 * // => ''
 *
 * clean('           Hello,      World!             ');
 * // => 'Hello, World!'
 */
export default function (target) {
    target = trim(target);

    if (target.length === 0) {
        return '';
    }

    return target.replace(new RegExp(`[${whitespaces}]+`, 'ig'), ' ');
}
