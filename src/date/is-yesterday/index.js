import add from '../add';
import startOf from '../start-of';

/**
 * @param {Date} value
 * @returns {boolean}
 */
export default function (value) {
    const yesterday = add(new Date(), -1, 'D');

    return startOf(value, 'D').getTime() === startOf(yesterday, 'D').getTime();
}