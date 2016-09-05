'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _array = require('./array');

var _array2 = _interopRequireDefault(_array);

var _datetime = require('./datetime');

var _datetime2 = _interopRequireDefault(_datetime);

var _function = require('./function');

var fn = _interopRequireWildcard(_function);

var _math = require('./math');

var _math2 = _interopRequireDefault(_math);

var _number = require('./number');

var _number2 = _interopRequireDefault(_number);

var _random = require('./random');

var _random2 = _interopRequireDefault(_random);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    array: _array2.default,
    datetime: _datetime2.default,
    'function': fn,
    math: _math2.default,
    number: _number2.default,
    random: _random2.default
};