'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _append = require('./append');

var _append2 = _interopRequireDefault(_append);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Removes all elements from `target` that `predicate` returns truthy for and returns an array of the removed elements.
 * The `predicate` is invoked with three arguments: (value, index, array).
 *
 * @param target {Array} The array to modify.
 * @param predicate {Function} The function onvoked per iteration.
 * @returns {*} {Array} Returns the new array if removed items.
 *
 * @example
 * const target = [1, 2, 3, 4, 5, 6];
 * const evens = remove(target, x => x % 2 === 0);
 * console.log(target);
 * // => [1, 3, 5]
 * console.log(evens);
 * // => [2, 4, 6]
 */

function remove(target, predicate) {
    var result = [];

    if (!(target && target.length)) {
        return result;
    }

    var i = 0;

    while (i < target.length) {
        if (predicate(target[i], i, target)) {
            (0, _append2.default)(result, target.splice(i, 1));
        } else {
            i++;
        }
    }

    return result;
}

exports.default = remove;