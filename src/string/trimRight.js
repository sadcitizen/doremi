import whitespaces from '../internal/whitespaces.regex';
import toString from '../to/toString';
import rest from '../array/rest';

/**
 * Removes trailing whitespaces or given characters from `target`.
 *
 * @param {String} target The string to trim.
 * @returns {String} The trimmed string.
 *
 * @example
 *
 * trimRight('lorem   ');
 * // => 'lorem'
 *
 * trimRight('lorem/+*', '/', '+*');
 * // => 'lorem'
 */
function trimRight(target) {
    var chars = rest(arguments).join('');
    target = toString(target);

    if (target.length === 0) {
        return '';
    }

    chars = chars.length ? chars : whitespaces;
    return target.replace(new RegExp('[' + chars + ']+$', 'ig'), '');
}

export default trimRight;