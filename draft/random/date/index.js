import isDefined from '../../common/is-defined';
import isValid from '../../date/is-valid';
import integer from '../integer';

/**
 * Generates a pseudo-random date.
 *
 * @category random
 * @param {Date} before
 * @param {Date} after
 * @return {Date} Returns a pseudo-random date.
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

    return new Date(integer(min, max));
};
