/**
 * Repeats a given string `count` times.
 *
 * @param {string} target The string to _repeat.
 * @param {number} count The number of times to _repeat.
 * @returns {string} Returns the repeated string.
 *
 * @example
 *
 * _repeat('&', 4);
 * // => '&&&&'
 *
 * _repeat(12, 2);
 * // => '1212'
 */
export default function (target, count) {
    let result = '';

    target = String(target);

    if (target.length === 0) {
        return result;
    }

    // Quick case
    if (count === 1) {
        return target;
    }

    if (count === 2) {
        return `${target}${target}`;
    }

    for (count |= 0; count > 0; count >>>= 1, target += target) {
        if ((count & 1) === 1) {
            result += target;
        }
    }

    return result;
}
