import stringify from './stringify';

/**
 * Repeats a given stringify n times.
 *
 * @param {String} target The stringify to repeat.
 * @param {Number} count The number of times to repeat.
 * @returns {String} Returns the repeated stringify.
 *
 * @example
 *
 * repeat('&', 4);
 * // => '&&&&'
 *
 * repeat(12, 2);
 * // => '1212'
 */
function repeat(target, count) {
    let result = '';
    target = stringify(target);
    count |= 0;

    if (target.length === 0) {
        return result;
    }

    for (; count > 0; count >>>= 1, target += target) {
        if ((count & 1) === 1) {
            result += target;
        }
    }

    return result;
}

export default repeat;