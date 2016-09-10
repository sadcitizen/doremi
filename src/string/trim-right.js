import whitespaces from '../internal/regexes/whitespaces';
import stringify from './stringify';

/**
 * Removes trailing whitespaces or given characters from `target`.
 *
 * @param {String} target The stringify to trim.
 * @param {Array} rest The characters to remove.
 * @returns {String} The trimmed stringify.
 *
 * @example
 *
 * trimRight('lorem   ');
 * // => 'lorem'
 *
 * trimRight('lorem/+*', '/', '+*');
 * // => 'lorem'
 */
function trimRight(target, ...rest) {
    let chars = rest.join('');
    target = stringify(target);

    if (target.length === 0) {
        return '';
    }

    chars = chars.length ? chars : whitespaces;
    return target.replace(new RegExp(`[${chars}]+$`, 'ig'), '');
}

export default trimRight;