import string from '../to/string';
import clean from './clean';

/**
 * Returns the array of words form `target`.
 *
 * @param {String} target The string to separate.
 * @param {String} sep The separator.
 * @returns {Array} The array of words.
 *
 * @example
 *
 * words('lorem ipsum dolor sit');
 * // => ['lorem', 'ipsum', 'dolor', 'sit']
 *
 * words('lorem/ipsum/dolor/sit', '/');
 * // => ['lorem', 'ipsum', 'dolor', 'sit']
 */
function words(target, sep) {
    target = clean(target);
    sep = string(sep);

    if (target.length === 0) {
        return [];
    }

    return target.split(sep.length ? sep: ' ');
}

export default words;