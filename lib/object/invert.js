'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = require('./keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: add description
function invert(target) {
    var result = {};
    (0, _keys2.default)(target).forEach(function (item) {
        return result[target[item]] = item;
    }, this);
    return result;
}

exports.default = invert;