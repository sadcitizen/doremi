'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slice = require('../internal/slice');

var _slice2 = _interopRequireDefault(_slice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns the first element of an array. Passing `count`
 * will return the first `count` elements of the array.
 *
 * @param target {Array} The array of elements.
 * @param count {number} The required count of elements.
 * @returns {*|Array} Returns elements of the array.
 *
 * @example
 *
 * first([1, 2, 3, 4, 5]);
 * // => 1
 *
 * first([1, 2, 3, 4, 5], 3);
 * // => [1, 2, 3]
 *
 * first([1, 2, 3, 4, 5], 99);
 * // => [1, 2, 3, 4, 5]
 */

function first(target) {
    var count = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

    if (count > 0) {
        return count === 1 ? target[0] : (0, _slice2.default)(target, 0, count);
    }
}

exports.default = first;