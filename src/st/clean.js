import trim from './trim';
import whitespaces from '../internal/whitespaces.regex';

/**
 * Cleans a string from whitespaces.
 *
 * @param {String} target The string to cleaning.
 * @returns {String} The cleaned string.
 *
 * @example
 *
 * st.clean('\0 \b \t \n \v \f \r');
 * // => ''
 *
 * st.clean('           Hello,      World!             ');
 * // => 'Hello, World!'
 */
function clean(target) {
    target = trim(target);

    if (target.length === 0) {
        return '';
    }

    return target.replace(new RegExp('[' + whitespaces + ']+', 'ig'), ' ');
}

export default clean;