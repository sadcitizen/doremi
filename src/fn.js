var fn = {};

fn.VERSION = '<%= version %>';

fn.curry = require('./fn/curry');
fn.demethodize = require('./fn/demethodize');

module.exports = fn;