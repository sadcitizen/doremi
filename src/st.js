var st = {};

st.VERSION = '<%= version %>';

st.camelize = require('./st/camelize');
st.capitalize = require('./st/capitalize');
st.chop = require('./st/chop');
st.clean = require('./st/clean');
st.contains = require('./st/contains');
st.count = require('./st/count');
st.decapitalize = require('./st/decapitalize');
st.endsWith = require('./st/endsWith');
st.escape = require('./st/escape');
st.insert = require('./st/insert');
st.join = require('./st/join');
st.lines = require('./st/lines');
st.lpad = require('./st/lpad');
st.ltrim = require('./st/ltrim');
st.pad = require('./st/pad');
st.remove = require('./st/remove');
st.repeat = require('./st/repeat');
st.reverse = require('./st/reverse');
st.rpad = require('./st/rpad');
st.rtrim = require('./st/rtrim');
st.startsWith = require('./st/startsWith');
st.swap = require('./st/swap');
st.template = require('./st/template');
st.trim = require('./st/trim');
st.truncate = require('./st/truncate');
st.unescape = require('./st/unescape');
st.words = require('./st/words');

module.exports = st;