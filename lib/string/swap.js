'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('./stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Swaps case of case-based characters in a given stringify.
 *
 * @param {string} target The stringify to swap.
 * @returns {string} Returns the swapped stringify.
 *
 * @example
 * swap('hello');
 * // => 'HELLO'
 *
 * swap('lOREM');
 * // => 'Lorem'
 */
function swap(target) {
    target = (0, _stringify2.default)(target);

    if (target.length === 0) {
        return '';
    }

    return target.replace(/\S/g, function (char) {
        return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    });
}

exports.default = swap;