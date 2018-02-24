/**
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number} 
 */
export default function (value, min, max) {
    return value < min ? min : (value > max ? max : value);
}