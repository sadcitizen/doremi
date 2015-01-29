var exists = require('../is/exists');
var constants = require('../internal/constants');

module.exports = function int(min, max) {
    min = exists(min) ? ~~min : constants.MIN_INT;
    max = exists(max) ? ~~max : constants.MAX_INT;

    if (min > max) {
        throw new Error('Minimum value cannot be greater than maximum value.');
    }

    return Math.floor(Math.random() * (max - min + 1) + min);
};
