/**
 * @param {Array} target
 * @param {number} count
 * @returns {Array}
 *
 * @immutable
 */
export default function (target, count = 1) {
    if (count > 0) {
        return target.slice(target.length > count ? target.length - count : 0);
    }

    return [];
}
