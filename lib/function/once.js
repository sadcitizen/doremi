'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _before = require('./before');

var _before2 = _interopRequireDefault(_before);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: add description

function once(target) {
    return (0, _before2.default)(target, 2);
}

exports.default = once;