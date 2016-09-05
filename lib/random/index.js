'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bool = require('./bool');

var _bool2 = _interopRequireDefault(_bool);

var _choice = require('./choice');

var _choice2 = _interopRequireDefault(_choice);

var _float = require('./float');

var _float2 = _interopRequireDefault(_float);

var _guid = require('./guid');

var _guid2 = _interopRequireDefault(_guid);

var _hex = require('./hex');

var _hex2 = _interopRequireDefault(_hex);

var _integer = require('./integer');

var _integer2 = _interopRequireDefault(_integer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    bool: _bool2.default,
    choice: _choice2.default,
    float: _float2.default,
    guid: _guid2.default,
    hex: _hex2.default,
    integer: _integer2.default
};