import isDefined from '../../common/is-defined';
import { MIN_INT, MAX_INT } from '../../internal/constants';

const { floor, random } = Math;

/**
 * @param {number} [min] The minimum value to generate.
 * @param {number} [max] The maximum value to generate.
 * @param {number} [fixed] The length of fraction.
 * @return {number} Returns the float number.
 */
export default function (min, max, fixed) {
    let frac = random();

    min = isDefined(min) ? ~~min : MIN_INT;
    max = isDefined(max) ? ~~max : MAX_INT;

    if (min > max) {
        throw new Error('Minimum value cannot be greater than maximum value.');
    }

    return parseFloat((floor(random() * (max - min - frac)) + frac).toFixed(fixed || 5));
}
