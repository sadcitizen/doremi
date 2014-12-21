var type = require('./type');
var exists = require('./exists');

module.exports = function empty(target) {
    if (!exists(target)) {
        return true;
    }

    var tp = type(target);

    if (tp === 'array' || tp === 'string' || tp === 'arguments') {
        return target.length === 0;
    }

    if (tp === 'object') {
        for (var key in target) {
            if (target.hasOwnProperty(key)) {
                return false;
            }
        }
    }

    return true;
};