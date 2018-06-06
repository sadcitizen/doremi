import isNumber from '../../number/is-number';

/**
 * @param {Array} array
 * @param {number} size
 * @returns {Array}
 */
export default function (array, size = 0) {
    if (!Array.isArray(array)) {
        throw new Error('The array must be an array');
    }

    if (!isNumber(size)) {
        throw new Error('The size must be a number');
    }

    const result = [];
    const len = size < 1 ? 1 : size;
    const buffer = [...array];

    while (buffer.length >= len) {
        result.push(buffer.splice(0, len));
    }

    if (buffer.length) {
        result.push(buffer);
    }

    return result;
}
