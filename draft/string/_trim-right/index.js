import whitespaces from '../../internal/regexes/whitespaces';

/**
 * Removes trailing whitespaces or given characters from `target`.
 *
 * @param {string} target The string to _trim.
 * @param {Array} rest The characters to _remove.
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
export default function (target, ...rest) {
    target = String(target);

    if (target.length === 0) {
        return '';
    }

    const chars = rest.join('');

    return target.replace(new RegExp(`[${chars.length ? chars : whitespaces}]+$`, 'ig'), '');
}
