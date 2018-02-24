/**
 * @param {number} value
 * @returns {-1|0|1}
 */
export default function (value) {
    return value < 0 ? -1 : (value > 0 ? 1 : 0);
}