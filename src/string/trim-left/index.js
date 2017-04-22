import whitespaces from '../../internal/regexes/whitespaces';

/**
 * Removes leading whitespaces or given characters from `target`.
 *
 * @param {string} target The string to trim.
 * @param {Array} rest The characters to remove.
 * @returns {string} The trimmed string.
 *
 * @example
 * trimLeft('   lorem');
 * // => 'lorem'
 *
 * trimLeft('*+/lorem', '/', '+*');
 * // => 'lorem'
 */
export default function (target, ...rest) {
    target = String(target);

    if (target.length === 0) {
        return '';
    }

    const chars = rest.join('');

    return target.replace(new RegExp(`^[${chars.length ? chars : whitespaces}]+`, 'ig'), '');
}
