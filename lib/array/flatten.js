'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isArray = require('../is/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _append = require('./append');

var _append2 = _interopRequireDefault(_append);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Flattens a nested array. If `deep` is true the array is recursively
 * flattened, otherwise it is only flattened a single level.
 *
 * @param target {Array} The array to flatten.
 * @param deep {boolean} Specify a deep flatten.
 * @returns {Array} The new flattened array.
 *
 * @example
 *
 * flatten([1, [2], [3, [[4]]]]);
 * // => [1, 2, 3, 4]
 *
 * flatten([1, [2], [3, [[4]]]], false);
 * // => [1, 2, 3, [[4]]]
 */
function flatten(target) {
    var deep = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

    var result = [];

    target.forEach(function (x) {
        return (0, _isArray2.default)(x) ? (0, _append2.default)(result, deep ? flatten(x, deep) : x) : result.push(x);
    });

    return result;
}

exports.default = flatten;