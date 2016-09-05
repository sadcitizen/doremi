'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isFunction = require('../is/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: add description

function after(target, times) {
    times |= 0;

    if (!(0, _isFunction2.default)(target)) {
        throw new TypeError('Target must be a function.');
    }

    return function () {
        if (--times < 1) {
            return target.apply(this, arguments);
        }
    };
}

exports.default = after;