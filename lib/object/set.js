'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (target, prop, value) {
    var parts = prop.split('.');
    var key = void 0;

    if (parts.length > 1) {
        key = parts.pop();
        (0, _ns2.default)(target, parts.join('.'))[key] = value;
    } else {
        target[prop] = value;
    }
};

var _ns = require('./ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }