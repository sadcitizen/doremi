var reverse = require('../internal/reverse');

module.exports = function flip(target) {
    return function () {
        return target.apply(null, reverse(arguments));
    };
};