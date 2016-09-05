'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = require('../internal/constants');

var _constants2 = _interopRequireDefault(_constants);

var _integer = require('./integer');

var _integer2 = _interopRequireDefault(_integer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: add description

function hex(length) {
    var result = '';
    var letters = (_constants2.default.HEX_LETTERS + _constants2.default.DIGITS).split('');
    var size = letters.length;

    length = length && length > 0 ? length : 1;

    while (length--) {
        result += letters[(0, _integer2.default)(0, size - 1)];
    }

    return result;
}

exports.default = hex;