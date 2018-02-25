import startOf from '../start-of';

/**
 * @param {Date} value
 * @returns {boolean}
 */
export default function (value) {
    return startOf(value, 'D').getTime() === startOf(new Date(), 'D').getTime();
}
