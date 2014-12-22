var has = require('./has');

module.exports = Object.keys || function keys(target) {
    var result = [];

    for (var key in target) {
        if (has(target, key)) {
            result.push(key);
        }
    }

    return result;
};