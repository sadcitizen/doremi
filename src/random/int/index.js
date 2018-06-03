import isDefined from '../../common/is-defined';
import { MIN_INT, MAX_INT } from '../../internal/constants';

const { floor, random } = Math;

/**
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
export default function (min, max) {
    min = isDefined(min) ? min : MIN_INT;
    max = isDefined(max) ? max : MAX_INT;

    if (min > max) {
        throw new Error('Minimum value cannot be greater than maximum value.');
    }

    return floor((random() * (max - min + 1)) + min);
}
