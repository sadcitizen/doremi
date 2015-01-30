var int = require('./int');
var array = require('../is/array');
var slice = require('../internal/slice');

module.exports = function choice(list) {
    var args = (arguments.length === 1 && array(list)) ? list : slice(arguments);

    return args[int(0, args.length - 1)];
};
