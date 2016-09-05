'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isUndefined = require('../is/isUndefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _isObject = require('../is/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _isString = require('../is/isString');

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an empty nested object by `path` and returns it.
 * Reuses an existent nested properties if it is an object, else override it to object.
 *
 * @param target The object to inspect.
 * @param path Path for properties.
 * @returns {object} Returns the nested object.
 *
 * @example
 *
 * var lorem = {};
 * ns(lorem, 'ipsum.dolor.sit');
 * // => lorem = { ipsum: { dolor: sit: {} } }
 *
 * var lorem = { ipsum: 'dolor' };
 * ns(lorem, 'ipsum.dolor.sit');
 * // => lorem = { ipsum: { dolor: sit: {} } } (ipsum is overridden)
 */
function ns(target, path) {
    if (!(0, _isObject2.default)(target)) {
        throw new TypeError('Target must be an object!');
    }

    if (!(0, _isString2.default)(path)) {
        throw new TypeError('Path must be a string!');
    }

    var obj = target;

    path.split('.').forEach(function (key) {
        if (!(!(0, _isUndefined2.default)(obj[key]) && (0, _isObject2.default)(obj[key]))) {
            obj[key] = {};
        }

        obj = obj[key];
    });

    return obj;
}

exports.default = ns;