/**
 * Repeats a given string `count` times.
 *
 * @param {string} target The string to repeat.
 * @param {number} count The number of times to repeat.
 * @returns {string} Returns the repeated string.
 *
 * @example
 *
 * repeat('&', 4);
 * // => '&&&&'
 *
 * repeat(12, 2);
 * // => '1212'
 */
export default function (target, count) {
    let result = '';

    target = String(target);

    if (target.length === 0) {
        return result;
    }

    for (count |= 0; count > 0; count >>>= 1, target += target) {
        if ((count & 1) === 1) {
            result += target;
        }
    }

    return result;
}
