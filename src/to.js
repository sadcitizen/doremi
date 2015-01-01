var to = {};

to.VERSION = '<%= version %>';

to.array = require('./to/array');
to.constant = require('./to/constant');
to.string = require('./to/string');

module.exports = to;