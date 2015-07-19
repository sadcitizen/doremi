import isExists from '../is/isExists';
import constants from '../internal/constants';

// TODO: add description

function float(min, max, fixed) {
    let frac = Math.random();

    min = isExists(min) ? ~~min : constants.MIN_INT;
    max = isExists(max) ? ~~max : constants.MAX_INT;

    if (min > max) {
        throw new Error('Minimum value cannot be greater than maximum value.');
    }

    return parseFloat((Math.floor(Math.random() * (max - min - frac)) + frac).toFixed(fixed || 5));
}

export default float;