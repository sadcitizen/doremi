var object = {};

object.VERSION = '<%= version %>';

object.get = require('./object/get');
object.has = require('./object/has');
object.hasOwn = require('./object/hasOwn');
object.keys = require('./object/keys');
object.ns = require('./object/ns');
object.prop = require('./object/prop');
object.result = require('./object/result');
object.set = require('./object/set');

module.exports = object;