import add from '../add';
import isValid from '../is-valid';
import startOf from '../start-of';

/**
 * @param {Date} value
 * @returns {boolean}
 */
export default function (value) {
    if (!isValid(value)) {
        throw new Error('The value must be a valid date');
    }

    const yesterday = add(new Date(), -1, 'D');

    return startOf(value, 'D').getTime() === startOf(yesterday, 'D').getTime();
}