'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('./stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Repeats a given stringify n times.
 *
 * @param {String} target The stringify to repeat.
 * @param {Number} count The number of times to repeat.
 * @returns {String} Returns the repeated stringify.
 *
 * @example
 *
 * repeat('&', 4);
 * // => '&&&&'
 *
 * repeat(12, 2);
 * // => '1212'
 */
function repeat(target, count) {
    var result = '';
    target = (0, _stringify2.default)(target);
    count |= 0;

    if (target.length === 0) {
        return result;
    }

    for (; count > 0; count >>>= 1, target += target) {
        if ((count & 1) === 1) {
            result += target;
        }
    }

    return result;
}

exports.default = repeat;