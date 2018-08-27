/**
 * Counts the number of occurrences of a substring in a string.
 *
 * @param {string} target The string to search.
 * @param {string} sub The substring.
 * @returns {number} Return the count.
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
export default function (target, sub) {
    target = String(target);
    sub = String(sub);

    if (target.length === 0) {
        return 0;
    }

    if (!sub.length) {
        throw new RangeError('String must not be empty!');
    }

    let counter = 0;
    let pos = target.indexOf(sub);

    while (pos >= 0) {
        counter += 1;
        pos = target.indexOf(sub, pos + 1);
    }

    return counter;
}
