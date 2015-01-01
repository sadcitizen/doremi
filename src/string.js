var string = {};

string.VERSION = '<%= version %>';

string.contains = require('./string/contains');
string.insert = require('./string/insert');

module.exports = string;