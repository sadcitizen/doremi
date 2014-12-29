var object = {};

object.VERSION = '<%= version %>';

object.get = require('./object/get');
object.has = require('./object/has');
object.hasOwn = require('./object/hasOwn');
object.keys = require('./object/keys');
object.property = require('./object/property');
object.result = require('./object/result');

module.exports = object;