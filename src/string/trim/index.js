import whitespaces from '../../internal/regexes/whitespaces';

/**
 * Removes leading and trailing whitespaces or given characters from `target`.
 *
 * @param {String} target The string to trim.
 * @param {Array} rest The characters to remove.
 * @returns {String} The trimmed string.
 *
 * @example
 * trim('   lorem   ');
 * // => 'lorem'
 *
 * trim('*+/lorem/+*', '/', '+*');
 * // => 'lorem'
 */
export default function (target, ...rest) {
    target = String(target);

    if (target.length === 0) {
        return '';
    }

    let chars = rest.join('');
    chars = chars.length ? chars : whitespaces;

    return target.replace(new RegExp(`^[${chars}]+|[${chars}]+$`, 'ig'), '');
}
