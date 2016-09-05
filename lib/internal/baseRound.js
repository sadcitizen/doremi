'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (target) {
    var fn = Math[target];
    return function (num) {
        var precision = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

        precision = Math.pow(10, precision | 0);
        return (0, _isNumber2.default)(num) ? fn(num * precision) / precision : NaN;
    };
};

var _isNumber = require('../is/isNumber');

var _isNumber2 = _interopRequireDefault(_isNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }