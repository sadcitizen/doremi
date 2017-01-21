import identity from '../../func/identity';

/**
 * Modifies the element of an array and returns a new copy of the array.
 *
 * @param {Array} target The array with the element to modify.
 * @param {number} index The index of the element.
 * @param {Function} [modifier] The function to apply.
 * @return {Array} Returns new cope of the array.
 */
export default function (target, index, modifier = identity) {
    if (index < 0 || index >= target.length) {
        return target.slice(0);
    }

    return [
        ...target.slice(0, index),
        modifier(target[index]),
        ...target.slice(index + 1)
    ];
}
