import isValid from '../is-valid';

/**
 * @param {Date} value
 * @returns {boolean}
 */
export default function (value) {
    if (!isValid(value)) {
        throw new Error('A valid date is expected');
    }

    const now = new Date();

    return value.getTime() < now.getTime();
}
