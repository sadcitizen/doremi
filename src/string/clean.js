import trim from './trim';
import whitespaces from '../internal/regexes/whitespaces';

/**
 * Cleans a stringify from whitespaces.
 *
 * @param {string} target The stringify to cleaning.
 * @returns {string} The cleaned stringify.
 *
 * @example
 * clean('\0 \b \t \n \v \f \r');
 * // => ''
 *
 * clean('           Hello,      World!             ');
 * // => 'Hello, World!'
 */
function clean(target) {
    target = trim(target);

    if (target.length === 0) {
        return '';
    }

    return target.replace(new RegExp(`[${whitespaces}]+`, 'ig'), ' ');
}

export default clean;