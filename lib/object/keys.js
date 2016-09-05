'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _hasOwn = require('./hasOwn');

var _hasOwn2 = _interopRequireDefault(_hasOwn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an array of all own enumerable property names of `target`.
 *
 * @param target The object to inspect.
 * @returns {Array} Returns array of property names.
 *
 * @example
 *
 * var obj = { a: 'b', c: 'd' };
 * keys(obj);
 * // => ['a', 'c']
 *
 * function Point(x, y) {
 *      this.x = x;
 *      this.y = y;
 * }
 *
 * Point.prototype.getCoords = function () {
 *      return [this.x, this.y];
 * }
 *
 * keys(new Point(0, 0));
 * // => ['x', 'y'] (The `getCoords` is not own property)
 */
function keys(target) {
    var result = [];

    for (var key in target) {
        if ((0, _hasOwn2.default)(target, key)) {
            result.push(key);
        }
    }

    return result;
}

exports.default = keys;