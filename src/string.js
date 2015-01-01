var string = {};

string.VERSION = '<%= version %>';

string.contains = require('./string/contains');
string.insert = require('./string/insert');
string.remove = require('./string/remove');

module.exports = string;