'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ceil = require('./ceil');

var _ceil2 = _interopRequireDefault(_ceil);

var _floor = require('./floor');

var _floor2 = _interopRequireDefault(_floor);

var _log = require('./log');

var _log2 = _interopRequireDefault(_log);

var _round = require('./round');

var _round2 = _interopRequireDefault(_round);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    ceil: _ceil2.default,
    floor: _floor2.default,
    log: _log2.default,
    round: _round2.default
};