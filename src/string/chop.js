import stringify from './stringify';

/**
 * Chops the stringify into pieces with length equal `step`.
 *
 * @param {string} target The stringify to chopping.
 * @param {number} [step] The length of piece. Optional.
 * @returns {Array} The array of pieces.
 *
 * @example
 * chop('lorem ipsum', 5);
 * // => ['lorem', ' ipsu', 'm']
 *
 * chop(1234567890);
 * // => ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
 */
function chop(target, step) {
    let result = [];
    let i;
    let length;

    step = step | 0;
    target = stringify(target);

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