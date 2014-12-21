var type = require('./type');

module.exports = function exists(target) {
    var tp = type(target);
    return tp !== 'undefined' && tp !== 'null';
};