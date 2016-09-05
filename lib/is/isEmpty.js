'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _type = require('./type');

var _type2 = _interopRequireDefault(_type);

var _isExists = require('./isExists');

var _isExists2 = _interopRequireDefault(_isExists);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `target` is empty.
 * Returns `true` is `target` is not an enumerable value or array, string
 * with a length greater than `0` or an object without own enumerable properties.
 *
 * @param target The value to check.
 * @returns {boolean} Returns `true` if `target` is empty, else 'false'.
 *
 * @example
 *
 * isEmpty('');
 * // => true
 *
 * isEmpty([]);
 * // => true
 *
 * isEmpty({});
 * // => true
 */
function empty(target) {
    if (!(0, _isExists2.default)(target)) {
        return true;
    }

    var tp = (0, _type2.default)(target);

    if (tp === 'array' || tp === 'string' || tp === 'arguments') {
        return target.length === 0;
    }

    if (tp === 'object') {
        for (var key in target) {
            if (target.hasOwnProperty(key)) {
                return false;
            }
        }
    }

    return true;
}

exports.default = empty;