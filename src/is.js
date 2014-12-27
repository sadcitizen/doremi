var is = {};

is.VERSION = '<%= version %>';

is.args = require('./is/args');
is.array = require('./is/array');
is.bool = require('./is/bool');
is.date = require('./is/date');
is.defined = require('./is/defined');
is.empty = require('./is/empty');
is.equal = require('./is/equal');
is.even = require('./is/even');
is.exists = require('./is/exists');
is.float = require('./is/float');
is.fn = require('./is/fn');
is.guid = require('./is/guid');
is.hex = require('./is/hex');
is.int = require('./is/int');
is.json = require('./is/json');
is.nan = require('./is/nan');
is.not = require('./is/not');
is.number = require('./is/number');
is.object = require('./is/object');
is.odd = require('./is/odd');
is.primitive = require('./is/primitive');
is.regexp = require('./is/regexp');
is.string = require('./is/string');
is.type = require('./is/type');

module.exports = is;