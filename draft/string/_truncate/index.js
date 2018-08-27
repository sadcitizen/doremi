import trim from '../_trim';

/**
 * Truncates `target` if it is longer than the given maximum string length.
 *
 * @param {string} target The string to _truncate.
 * @param {number} limit The maximum string length.
 * @param {string} [sfx] The string to indicate text is omitted. Defaults is '...'.
 * @param {boolean} [safe] If it should not break words. Default is false.
 * @returns {string} Returns the truncated string.
 *
 * @example
 * _truncate('lorem ipsum dolor sit amet', 10);
 * // => 'lorem i...'
 *
 * _truncate('lorem ipsum dolor sit amet', 10, null, true);
 * // => 'lorem...'
 */
export default function (target, limit, sfx, safe = false) {
    target = trim(target);
    sfx = sfx || '...';
    limit |= 0;
    limit = safe ? limit + 1 : limit;

    if (target.length <= limit) {
        return target;
    }

    target = target.substring(0, limit - sfx.length);
    target = safe ? target.substr(0, target.lastIndexOf(' ')) : trim(target);

    return target + sfx;
}
