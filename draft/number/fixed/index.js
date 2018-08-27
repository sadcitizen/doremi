/**
 * @param {number} target
 * @param {number} precision
 * @returns {string}
 */
export default (target, precision = 2) => {
    if (precision > 0) {
        return target.toFixed(precision + 1).slice(0, -1);
    }

    return target.toFixed(1).slice(0, -2);
};
