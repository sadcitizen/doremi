'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isArray = require('../is/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns an array of elements corresponding to the given indexes.
 *
 * @param target {Array} The array to iterate over.
 * @param indexes {Array} The indexes of elements to pick.
 * @returns {*|Array} The array of elements.
 *
 * @example
 *
 * at([1, 2, 3, 4, 5], 1);
 * // => 2
 *
 * at([1, 2, 3, 4, 5], 1, 3);
 * // => [2, 4]
 *
 * at([1, 2, 3, 4, 5], [-1, -2, 0]);
 * // => [5, 4, 1]
 */

function at(target) {
    var index = void 0;

    for (var _len = arguments.length, indexes = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        indexes[_key - 1] = arguments[_key];
    }

    if (indexes.length === 1) {
        index = indexes[0];

        if ((0, _isArray2.default)(index)) {
            return index.map(function (x) {
                return at(target, x);
            });
        }

        return target[index < 0 ? target.length + index : index];
    }

    if (indexes.length > 1) {
        return indexes.map(function (x) {
            return at(target, x);
        });
    }
}

exports.default = at;