var exists = require('../is/exists');
var constants = require('../internal/constants');

module.exports = function float(min, max, fixed) {
    var frac = Math.random();

    min = exists(min) ? ~~min : constants.MIN_INT;
    max = exists(max) ? ~~max : constants.MAX_INT;

    if (min > max) {
        throw new Error('Minimum value cannot be greater than maximum value.');
    }

    return parseFloat((Math.floor(Math.random() * (max - min - frac)) + frac).toFixed(fixed || 5));
};
