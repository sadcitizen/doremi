import isDefined from '../../common/is-defined';
import constants from '../../internal/constants';

// TODO: add description

function int(min, max) {
    min = isDefined(min) ? ~~min : constants.MIN_INT;
    max = isDefined(max) ? ~~max : constants.MAX_INT;

    if (min > max) {
        throw new Error('Minimum value cannot be greater than maximum value.');
    }

    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default int;
