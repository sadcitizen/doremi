/**
 * @param {number} target The number to format.
 * @param {number} precision The precision to format to.
 * @returns {string} Returns the formatted number.
 */
export default (target, precision = 2) => {
    if (precision > 0) {
        return target.toFixed(precision + 1).slice(0, -1);
    }

    return target.toFixed(1).slice(0, -2);
};
