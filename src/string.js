var string = {};

string.VERSION = '<%= version %>';

string.capitalize = require('./string/capitalize');
string.chop = require('./string/chop');
string.clean = require('./string/clean');
string.contains = require('./string/contains');
string.count = require('./string/count');
string.decapitalize = require('./string/decapitalize');
string.endsWith = require('./string/endsWith');
string.insert = require('./string/insert');
string.join = require('./string/join');
string.ltrim = require('./string/ltrim');
string.remove = require('./string/remove');
string.repeat = require('./string/repeat');
string.reverse = require('./string/reverse');
string.rtrim = require('./string/rtrim');
string.startsWith = require('./string/startsWith');
string.swap = require('./string/swap');
string.template = require('./string/template');
string.trim = require('./string/trim');
string.truncate = require('./string/truncate');
string.words = require('./string/words');

module.exports = string;