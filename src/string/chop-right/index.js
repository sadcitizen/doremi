/**
 * Chops the string into pieces with length equal `step`.
 *
 * @param {string|*} target The string to chopping.
 * @param {number} step The length of piece.
 * @returns {Array} The array of pieces.
 *
 * @example
 * chopRight('lorem ipsum', 5);
 * // => ['l', 'orem ', 'ipsum']
 *
 * chopRight(1234567890);
 * // => ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
 */
function chopRight(target, step) {
    let result = [];
    let i;

    step |= 0;
    target = String(target);

    if (target.length === 0) {
        return [];
    }

    if (step < 2) {
        return target.split('');
    }

    for (i = target.length; i >= 0; i -= step) {
        result.unshift(target.slice(i - step < 0 ? 0 : i - step, i));
    }

    return result;
}

export default chopRight;
