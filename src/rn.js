var rn = {};

rn.VERSION = '<%= version %>';

rn.bool = require('./rn/bool');
rn.choice = require('./rn/choice');
rn.float = require('./rn/float');
rn.guid = require('./rn/guid');
rn.hex = require('./rn/hex');
rn.int = require('./rn/int');

module.exports = rn;