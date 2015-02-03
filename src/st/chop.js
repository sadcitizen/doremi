import string from '../to/string';

/**
 * Chops the string into pieces with length equal `step`.
 *
 * @param {String} target The string to chopping.
 * @param {Number} step The length of piece.
 * @returns {Array} The array of pieces.
 *
 * @example
 *
 * st.chop('lorem ipsum', 5);
 * // => ['lorem', ' ipsu', 'm']
 *
 * st.chop(1234567890);
 * // => ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
 */
function chop(target, step) {
    var result = [], i, length;

    step = step | 0;
    target = string(target);

    if (target.length === 0) {
        return [];
    }

    if (step < 2) {
        return target.split('');
    }

    length = target.length;

    for (i = 0; i < length; i += step) {
        result.push(target.slice(i, i + step));
    }

    return result;
}

export default chop;