/**
 * @param {number} value
 * @param {number} precision
 * @returns {string}
 */
export default (value, precision = 2) => {
    if (precision > 0) {
        return value.toFixed(precision + 1).slice(0, -1);
    }

    return value.toFixed(1).slice(0, -2);
};
