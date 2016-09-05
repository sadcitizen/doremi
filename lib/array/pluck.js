'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _prop = require('../object/prop');

var _prop2 = _interopRequireDefault(_prop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: add description

function pluck(target, key) {
    return target.map((0, _prop2.default)(key));
}

exports.default = pluck;