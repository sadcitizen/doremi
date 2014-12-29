var object = {};

object.VERSION = '<%= version %>';

object.get = require('./object/get');
object.has = require('./object/has');
object.hasOwn = require('./object/hasOwn');
object.keys = require('./object/keys');
object.prop = require('./object/prop');
object.result = require('./object/result');

module.exports = object;