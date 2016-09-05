"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var es6 = exports.es6 = /\$\{([^${}]+?)\}/g;

var underscore = exports.underscore = /<\%\=([^<%=>]+?)\%>/g;

var mustache = exports.mustache = /\{\{([^\}]+)\}\}/g;