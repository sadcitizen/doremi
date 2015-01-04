var fn = {};

fn.VERSION = '<%= version %>';

fn.after = require('./fn/after');
fn.async = require('./fn/async'); // defer
fn.before = require('./fn/before');
fn.compose = require('./fn/compose');
fn.curry = require('./fn/curry'); // partial
fn.debounce = require('./fn/debounce');
fn.delay = require('./fn/delay');
fn.demethodize = require('./fn/demethodize');
fn.flip = require('./fn/flip');
fn.memoize = require('./fn/memoize');
fn.noop = require('./fn/noop');
fn.once = require('./fn/once');
fn.pipeline = require('./fn/pipeline');
fn.repeat = require('./fn/repeat');
fn.throttle = require('./fn/throttle');

module.exports = fn;