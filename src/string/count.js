import toString from '../to/toString';

/**
 * Counts the number of occurrences of a substring in a string.
 *
 * @param {String} target The string to search.
 * @param {String} sub The
 * @returns {Number}
 *
 * @example
 *
 * count('Hello, World!', 'l');
 * // => 1
 *
 * count(99999, 9);
 * // => 5
 *
 * count(99999, 99);
 * // => 4
 */
function count(target, sub) {
    target = toString(target);
    sub = toString(sub);

    if (target.length === 0) {
        return 0;
    }

    if (!sub.length) {
        throw new RangeError('Search string must not be empty!');
    }

    var counter = 0,
        pos = target.indexOf(sub);
    while (pos >= 0) {
        counter += 1;
        pos = target.indexOf(sub, pos + 1);
    }
    return counter;
}

export default count;