import stringify from './stringify';
import clean from './clean';

/**
 * Returns the array of words form `target`.
 *
 * @param {string} target The stringify to separate.
 * @param {string} sep The separator.
 * @returns {Array} The array of words.
 *
 * @example
 * words('lorem ipsum dolor sit');
 * // => ['lorem', 'ipsum', 'dolor', 'sit']
 *
 * words('lorem/ipsum/dolor/sit', '/');
 * // => ['lorem', 'ipsum', 'dolor', 'sit']
 */
function words(target, sep) {
    target = clean(target);
    sep = stringify(sep);

    if (target.length === 0) {
        return [];
    }

    return target.split(sep.length ? sep : ' ');
}

export default words;