'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = require('./keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: add description

function each(target, fn, ctx) {
    var keys = (0, _keys2.default)(target);

    for (var i = 0, length = keys.length; i < length; i++) {
        if (fn.call(ctx, target[keys[i]], keys[i], target) === false) {
            break;
        }
    }
}

exports.default = each;