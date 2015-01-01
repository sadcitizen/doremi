var string = require('../to/string');

module.exports = function count(target, sub) {
    target = string(target);
    sub = string(sub);

    if (target.length === 0) {
        return 0;
    }

    if (!sub.length) {
        throw new RangeError('Search string must not be empty!');
    }

    var counter = 0,
        pos = target.indexOf(sub);
    while (pos >= 0) {
        counter += 1;
        pos = target.indexOf(sub, pos + 1);
    }
    return counter;
};