import isDefined from '../../common/is-defined';
import { MIN_INT, MAX_INT } from '../../internal/constants';

const { floor, random } = Math;

/**
 * @param {number} [min]
 * @param {number} [max]
 * @param {number} [precision]
 * @return {number}
 */
export default function (min, max, precision = 5) {
    const frac = random();

    const minValue = isDefined(min) ? min : MIN_INT;
    const maxValue = isDefined(max) ? max : MAX_INT;

    if (minValue > maxValue) {
        throw new Error('Minimum value cannot be greater than maximum value.');
    }

    return parseFloat((floor(random() * (maxValue - minValue - frac)) + frac).toFixed(precision));
}
