var to = {};

to.VERSION = '<%= version %>';

to.constant = require('./to/constant');
to.string = require('./to/string');

module.exports = to;