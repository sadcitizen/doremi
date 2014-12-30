var to = {};

to.VERSION = '<%= version %>';

to.array = require('./to/array');
to.constant = require('./to/constant');

module.exports = to;