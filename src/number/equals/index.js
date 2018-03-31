/**
 * @param {number} value
 * @param {number} other
 * @param {number} accuracy
 * @returns {boolean}
 */
export default function (value, other, accuracy = 0.001) {
    return Math.abs(value - other) < accuracy;
}