/**
 * Chops the string into pieces with length equal `step`.
 *
 * @param {string} target The string to chopping.
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
export default function (target, step) {
    target = String(target);

    if (target.length === 0) {
        return [];
    }

    step |= 0;

    if (step < 2) {
        return target.split('');
    }

    let result = [];

    for (let i = 0, length = target.length; i < length; i += step) {
        result.push(target.slice(i, i + step));
    }

    return result;
}
