var string = {};

string.VERSION = '<%= version %>';

string.capitalize = require('./string/capitalize');
string.chop = require('./string/chop');
string.clean = require('./string/clean');
string.contains = require('./string/contains');
string.count = require('./string/count');
string.insert = require('./string/insert');
string.join = require('./string/join');
string.remove = require('./string/remove');
string.trim = require('./string/trim');

module.exports = string;