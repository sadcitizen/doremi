'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slice = require('./slice');

var _slice2 = _interopRequireDefault(_slice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reverse(target) {
    return (0, _slice2.default)(target).reverse();
}

exports.default = reverse;