/**
 * @param {number} value The number to compare.
 * @param {number} other The number to compare.
 * @param {number} accuracy The maximum difference of the numbers at which they are equal.
 * @returns {boolean} Returns true if the numbers are equal, false otherwise.
 */
export default function (value, other, accuracy = 0.001) {
    return Math.abs(value - other) < accuracy;
}