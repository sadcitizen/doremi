'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _template = require('../internal/regexes/template');

var _isArray = require('../is/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _isObject = require('../is/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _isString = require('../is/isString');

var _isString2 = _interopRequireDefault(_isString);

var _each = require('../object/each');

var _each2 = _interopRequireDefault(_each);

var _get = require('./get');

var _get2 = _interopRequireDefault(_get);

var _trim = require('../string/trim');

var _trim2 = _interopRequireDefault(_trim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Replaces tokens from `target` on corresponding values from `source`.
 *
 * @param {*} target The target object or array with tokens.
 * @param {Object|Array} source The values to replace.
 * @param {RegExp} syntax The regular expression to search for tokens.
 * @returns {Object} Target object or array with replaced tokens
 *
 * @example
 *
 * var target = {a: '${a}', b: '${c}', c: '${b}'},
 *     source = {a: 1, b: 5, c: 3};
 *
 * template(target, source);
 * // => {a: 1, b: 3, c: 5}
 */
function template(target, source) {
    var syntax = arguments.length <= 2 || arguments[2] === undefined ? _template.es6 : arguments[2];

    if ((0, _isString2.default)(target)) {
        if (target.length === 0) {
            return '';
        }

        return (0, _get2.default)(source, (0, _trim2.default)(target.replace(syntax, '$1')), target);
    }

    var isArr = (0, _isArray2.default)(target);
    var isObj = (0, _isObject2.default)(target);
    var fn = function fn(value, key) {
        return target[key] = template(value, source, syntax);
    };

    /* jshint -W030 */
    isArr && target.forEach(fn);
    isObj && (0, _each2.default)(target, fn);
    /* jshint +W030 */

    return target;
}

exports.default = template;