var isFn = require('../is/fn');

module.exports = function after(target, times) {
    times |= 0;

    if (!isFn(target)) {
        throw new TypeError('Target must be a function.');
    }

    return function () {
        if (--times < 1) {
            return target.apply(this, arguments);
        }
    };
};