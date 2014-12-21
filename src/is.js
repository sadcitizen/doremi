var is = {};

is.VERSION = '<%= version %>';

['array', 'boolean', 'date', 'element', 'nan', 'number', 'object', 'regexp', 'string'].forEach(function (type) {
    is[type] = function (target) {
        return is.type(target) === type;
    };
});

is.args = require('./is/args');
is.defined = require('./is/defined');
is.empty = require('./is/empty');
is.equal = require('./is/equal');
is.even = require('./is/even');
is.exists = require('./is/exists');
is.float = require('./is/float');
is.fn = require('./is/fn');
is.int = require('./is/int');
is.json = require('./is/json');
is.not = require('./is/not');
is.odd = require('./is/odd');
is.primitive = require('./is/primitive');
is.type = require('./is/type');

module.exports = is;