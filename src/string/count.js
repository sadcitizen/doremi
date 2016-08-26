import stringify from './stringify';

/**
 * Counts the number of occurrences of a substring in a stringify.
 *
 * @param {string} target The stringify to search.
 * @param {string} sub The
 * @returns {number}
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
    target = stringify(target);
    sub = stringify(sub);

    if (target.length === 0) {
        return 0;
    }

    if (!sub.length) {
        throw new RangeError('Search stringify must not be empty!');
    }

    let counter = 0;
    let pos = target.indexOf(sub);

    while (pos >= 0) {
        counter += 1;
        pos = target.indexOf(sub, pos + 1);
    }

    return counter;
}

export default count;