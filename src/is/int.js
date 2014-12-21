var not = require('./not');
var float = require('./float');

module.exports = function int (target) {
    return not(float, target);
};