import isValid from '../is-valid';
import sign from '../../number/sign';

/**
 * @param {Date} value
 * @param {Date} other
 * @returns {number}
 */
export default function (value, other) {
    if (!isValid(value) || !isValid(other)) {
        throw new Error('Arguments must be a valid dates');
    }

    return sign(value.getTime() - other.getTime());
}
