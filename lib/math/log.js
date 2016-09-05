'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var log = Math.log;

exports.default = function (target, base) {
  return log(target) / log(base);
};