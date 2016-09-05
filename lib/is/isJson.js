'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isBlankString = require('./isBlankString');

var _isBlankString2 = _interopRequireDefault(_isBlankString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ESCAPES_REGEX = /\\["\\\/bfnrtu]/g;
var VALUES_REGEX = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
var BRACKETS_REGEX = /(?:^|:|,)(?:\s*\[)+/;
var INVALIDS_REGEX = /^[\],:{}\s]*$/;

/**
 * Checks if `target` is a json string.
 *
 * @param {*} target The value to check.
 * @returns {boolean} Returns `true` if `target` is a json string, else 'false'.
 *
 * @example
 *
 * isJson('');
 * // => false
 *
 * isJson('{"a":"b","c":"d"}');
 * // => true
 *
 * isJson('{}');
 * // => true
 */
function isJson(target) {
    return !(0, _isBlankString2.default)(target) && INVALIDS_REGEX.test(target.replace(ESCAPES_REGEX, '@').replace(VALUES_REGEX, ']').replace(BRACKETS_REGEX, ''));
}

exports.default = isJson;