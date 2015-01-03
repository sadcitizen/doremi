var pipeline = require('./pipeline');
var reverse = require('../internal/reverse');

module.exports = function compose() {
    return pipeline(reverse(arguments));
};