'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _abbreviate = require('./abbreviate');

var _abbreviate2 = _interopRequireDefault(_abbreviate);

var _fixed = require('./fixed');

var _fixed2 = _interopRequireDefault(_fixed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    abbreviate: _abbreviate2.default,
    fixed: _fixed2.default
};