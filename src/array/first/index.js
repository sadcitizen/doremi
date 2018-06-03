/**
 * @param {Array} target
 * @param {number} count
 * @returns {Array}
 *
 * @immutable
 */
export default function (target, count = 1) {
    if (count > 0) {
        return target.slice(0, count);
    }

    return [];
}
