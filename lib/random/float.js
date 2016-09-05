'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isExists = require('../is/isExists');

var _isExists2 = _interopRequireDefault(_isExists);

var _constants = require('../internal/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: add description

function float(min, max, fixed) {
    var frac = Math.random();

    min = (0, _isExists2.default)(min) ? ~~min : _constants2.default.MIN_INT;
    max = (0, _isExists2.default)(max) ? ~~max : _constants2.default.MAX_INT;

    if (min > max) {
        throw new Error('Minimum value cannot be greater than maximum value.');
    }

    return parseFloat((Math.floor(Math.random() * (max - min - frac)) + frac).toFixed(fixed || 5));
}

exports.default = float;