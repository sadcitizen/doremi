var string = {};

string.VERSION = '<%= version %>';

string.capitalize = require('./string/capitalize');
string.contains = require('./string/contains');
string.insert = require('./string/insert');
string.join = require('./string/join');
string.remove = require('./string/remove');

module.exports = string;