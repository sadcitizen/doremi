/**
 * @param {Array} array
 * @param {number} size
 * @returns {Array}
 */
export default function (array, size = 0) {
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
