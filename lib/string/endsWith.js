'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('./stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `target` ends with `sub`.
 *
 * @param {string} target The stringify to inspect.
 * @param {string} sub The substring to search in `target`.
 * @returns {boolean} Returns `true` if `target` ends with `sub`, else `false`.
 *
 * @example
 * endsWith('lorem', 'rem');
 * // => true
 *
 * endsWith(12345, 2);
 * // => false
 */
function endsWith(target, sub) {
    target = (0, _stringify2.default)(target);
    sub = (0, _stringify2.default)(sub);

    return target.indexOf(sub, target.length - sub.length) !== -1;
}

exports.default = endsWith;