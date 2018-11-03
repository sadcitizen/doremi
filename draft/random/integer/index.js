import isDefined from '../../common/is-defined';
import { MIN_INT, MAX_INT } from '../../internal/constants';

const { floor, random } = Math;

/**
 * Generates a pseudo-random integer number.
 *
 * @memberOf random
 * @param {number} min
 * @param {number} max
 * @return {number} Returns a pseudo-random integer number.
 */
export default function (min, max) {
    const minValue = isDefined(min) ? min : MIN_INT;
    const maxValue = isDefined(max) ? max : MAX_INT;

    if (minValue > maxValue) {
        throw new Error('Minimum value cannot be greater than maximum value.');
    }

    return floor((random() * (maxValue - minValue + 1)) + minValue);
}
