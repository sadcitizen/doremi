var keys = require('./keys');

module.exports = function invert(target) {
    var result = {};

    keys(target).forEach(function (item) {
        result[target[item]] = item;
    }, this);

    return result;
};