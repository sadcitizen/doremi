import { INVALID_ARRAY_FIRST_ARGUMENT } from '../../constants/errors';

/**
 * Splits the given array into smaller arrays of a specified size.
 *
 * @category array
 * @param {Array} value The array to split.
 * @param {number} size The length of each chunk.
 * @returns {Array} Returns new array of chunks.
 */
export default function (value, size = 0) {
    if (!Array.isArray(value)) {
        throw new TypeError(INVALID_ARRAY_FIRST_ARGUMENT);
    }

    const result = [];
    const len = size < 1 ? 1 : size;
    const buffer = [...value];

    while (buffer.length >= len) {
        result.push(buffer.splice(0, len));
    }

    if (buffer.length) {
        result.push(buffer);
    }

    return result;
}
