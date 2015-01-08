var ob = {};

ob.VERSION = '<%= version %>';

ob.get = require('./ob/get');
ob.has = require('./ob/has');
ob.hasOwn = require('./ob/hasOwn');
ob.invert = require('./ob/invert');
ob.keys = require('./ob/keys');
ob.ns = require('./ob/ns');
ob.pairs = require('./ob/pairs');
ob.prop = require('./ob/prop');
ob.result = require('./ob/result');
ob.set = require('./ob/set');
ob.values = require('./ob/values');

module.exports = ob;