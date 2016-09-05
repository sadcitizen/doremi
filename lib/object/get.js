'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (target, key, def) {
    (0, _ok2.default)((0, _isObject2.default)(target) || (0, _isArray2.default)(target), 'Target must be an object or an array!');
    (0, _ok2.default)((0, _isString2.default)(key), 'Property must be a string!');

    var obj = target;
    var parts = key.split('.');
    var last = parts.pop();

    /* eslint-disable no-cond-assign */
    while (key = parts.shift()) {
        obj = obj[key];
        if (!(0, _isExists2.default)(obj)) {
            return def;
        }
    }
    /* eslint-enable no-cond-assign */

    return !(0, _isUndefined2.default)(obj[last]) ? obj[last] : def;
};

var _ok = require('../internal/ok');

var _ok2 = _interopRequireDefault(_ok);

var _isObject = require('../is/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _isArray = require('../is/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _isString = require('../is/isString');

var _isString2 = _interopRequireDefault(_isString);

var _isExists = require('../is/isExists');

var _isExists2 = _interopRequireDefault(_isExists);

var _isUndefined = require('../is/isUndefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }