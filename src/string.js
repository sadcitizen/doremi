var string = {};

string.VERSION = '<%= version %>';

string.capitalize = require('./string/capitalize');
string.chop = require('./string/chop');
string.clean = require('./string/clean');
string.contains = require('./string/contains');
string.count = require('./string/count');
string.endsWith = require('./string/endsWith');
string.insert = require('./string/insert');
string.join = require('./string/join');
string.ltrim = require('./string/ltrim');
string.remove = require('./string/remove');
string.repeat = require('./string/repeat');
string.reverse = require('./string/reverse');
string.rtrim = require('./string/rtrim');
string.startsWith = require('./string/startsWith');
string.trim = require('./string/trim');

module.exports = string;