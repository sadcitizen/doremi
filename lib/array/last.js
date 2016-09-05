'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slice = require('../internal/slice');

var _slice2 = _interopRequireDefault(_slice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns the last element of an array. Passing `count`
 * will return the last `count` elements of the array.
 *
 * @param target {Array} The array of elements.
 * @param count {number} The required count of elements.
 * @returns {*|Array} Returns elements of the array.
 *
 * @example
 *
 * last([1, 2, 3, 4, 5]);
 * // => 5
 *
 * last([1, 2, 3, 4, 5], 3);
 * // => [3, 4, 5]
 *
 * last([1, 2, 3, 4, 5], 99);
 * // => [1, 2, 3, 4, 5]
 */

function last(target) {
    var count = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

    var length = target.length;

    if (count >= length) {
        return target;
    }

    if (count === 1) {
        return target[target.length - 1];
    }

    if (count > 0) {
        return (0, _slice2.default)(target, target.length - count, target.length);
    }
}

exports.default = last;