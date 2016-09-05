'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reverse = require('../internal/reverse');

var _reverse2 = _interopRequireDefault(_reverse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: add description

function flip(target) {
    var _arguments = arguments;

    return function () {
        return target.apply(null, (0, _reverse2.default)(_arguments));
    };
}

exports.default = flip;