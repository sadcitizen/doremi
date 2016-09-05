'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (target, data) {
    var syntax = arguments.length <= 2 || arguments[2] === undefined ? _template.es6 : arguments[2];

    target = (0, _stringify2.default)(target);

    if (target.length === 0) {
        return '';
    }

    var value = void 0;

    return target.replace(syntax, function (match, name) {
        value = (0, _get2.default)(data, (0, _trim2.default)(name));
        return !(0, _isUndefined2.default)(value) ? (0, _stringify2.default)(value) : match;
    });
};

var _stringify = require('./stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _get = require('../object/get');

var _get2 = _interopRequireDefault(_get);

var _trim = require('./trim');

var _trim2 = _interopRequireDefault(_trim);

var _isUndefined = require('../is/isUndefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _template = require('../internal/regexes/template');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }