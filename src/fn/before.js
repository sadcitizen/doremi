var isFn = require('../is/fn');

module.exports = function before(target, times) {
    var result;

    times |= 0;

    if (!isFn(target)) {
        throw new TypeError('Target must be a function.');
    }

    return function () {
        if (--times > 0) {
            result = target.apply(this, arguments);
        } else {
            target = null;
        }
        return result;
    };
};