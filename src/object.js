var object = {};

object.VERSION = '<%= version %>';

object.has = require('./object/has');
object.keys = require('./object/keys');

module.exports = object;