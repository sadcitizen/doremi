import isNumber from '../is-number';

/**
 * @param {number} target
 * @returns {boolean}
 */
export default function (target) {
    if (!isNumber(target)) {
        throw new Error('A number is expected');
    }

    if (target !== Math.floor(target)) {
        throw new Error('An integer is expected');
    }

    return target % 2 !== 0;
}