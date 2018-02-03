import isDefined from '../../common/is-defined';
import isValid from '../../date/is-valid';
import int from '../int';

/**
 * Generates a pseudo-random date.
 *
 * @param {Date} before The minimum value to generate.
 * @param {Date} after The maximum value to generate.
 * @return {Date} Return the integer number.
 *
 * @example
 * date(new Date(2010, 0, 1), new Date(2010, 11, 31));
 * // => Thu Sep 16 2010 00:00:00
 */
export default (before, after) => {
    if (!isDefined(before) || !isValid(before)) {
        throw new Error('Minimum value must be provided.');
    }

    if (!isDefined(after) || !isValid(after)) {
        throw new Error('Maximum value must be provided.');
    }

    const min = before.getTime();
    const max = after.getTime();

    if (min > max) {
        throw new Error('Minimum value cannot be greater than maximum value.');
    }

    return new Date(int(min, max));
};
