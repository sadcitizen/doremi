import isNumber from '../../common/is-number';

/**
 * @param {number} target
 * @returns {boolean}
 */
export default function (target) {
    if (!isNumber(target)) {
        throw new Error('A number is expected');
    }

    return target % 1 !== 0;
}
