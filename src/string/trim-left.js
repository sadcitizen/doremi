import whitespaces from '../internal/regexes/whitespaces';
import stringify from './stringify';

/**
 * Removes leading whitespaces or given characters from `target`.
 *
 * @param {string} target The stringify to trim.
 * @param {Array} rest The characters to remove.
 * @returns {string} The trimmed stringify.
 *
 * @example
 * trimLeft('   lorem');
 * // => 'lorem'
 *
 * trimLeft('*+/lorem', '/', '+*');
 * // => 'lorem'
 */
function trimLeft(target, ...rest) {
    var chars = rest.join('');
    target = stringify(target);

    if (target.length === 0) {
        return '';
    }

    chars = chars.length ? chars : whitespaces;
    return target.replace(new RegExp(`^[${chars}]+`, 'ig'), '');
}

export default trimLeft;