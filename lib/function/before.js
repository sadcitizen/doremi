'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isFunction = require('../is/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: add description

function before(target, times) {
    var result;

    times |= 0;

    if (!(0, _isFunction2.default)(target)) {
        throw new TypeError('Target must be a function.');
    }

    return function () {
        if (--times > 0) {
            result = target.apply(this, arguments);
        } else {
            target = null;
        }
        return result;
    };
}

exports.default = before;