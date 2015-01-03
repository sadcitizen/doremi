var slice = require('../internal/slice');
var noop = require('./noop');

module.exports = function pipeline() {
    var fns = slice(arguments);

    return fns.length === 0 ? noop : function () {
        return fns.reduce(function (result, func) {
            return func.call(this, result);
        }, fns.shift().apply(this, arguments));
    };
};