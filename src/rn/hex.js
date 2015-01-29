var constants = require('../internal/constants');
var int = require('./int');

module.exports = function hex(length) {
    var result = '',
        letters = (constants.HEX_LETTERS + constants.DIGITS).split(''),
        size = letters.length;

    length = length && length > 0 ? length : 1;

    while (length--) {
        result += letters[int(0, size - 1)];
    }

    return result;
};