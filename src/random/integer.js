import isExists from '../is/is-exists';
import constants from '../internal/constants';

// TODO: add description

function int(min, max) {
    min = isExists(min) ? ~~min : constants.MIN_INT;
    max = isExists(max) ? ~~max : constants.MAX_INT;

    if (min > max) {
        throw new Error('Minimum value cannot be greater than maximum value.');
    }

    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default int;
