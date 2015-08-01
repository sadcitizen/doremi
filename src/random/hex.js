import constants from '../internal/constants';
import integer from './integer';

// TODO: add description

function hex(length) {
    let result = '';
    const letters = (constants.HEX_LETTERS + constants.DIGITS).split('');
    const size = letters.length;

    length = length && length > 0 ? length : 1;

    while (length--) {
        result += letters[integer(0, size - 1)];
    }

    return result;
}

export default hex;