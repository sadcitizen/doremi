'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('./keys');

var _keys2 = _interopRequireDefault(_keys);

var _get = require('./get');

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a two dimensional array of the key-value pairs for `target`,
 * e.g. `[[key1, value1], [key2, value2]]`.
 * Available for nested properties.
 *
 * @param {Object} target The object to inspect.
 * @param {Array} args The array of keys.
 * @returns {Array} Returns array of key-value pairs.
 *
 * @example
 *
 * var obj = { a: 'b', c: 'd' };
 * pairs(obj);
 * // => ['b', 'd']
 *
 * pairs(obj, 'a');
 * // => ['a', 'b']
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
 * pairs(new Point(0, 0));
 * // => [['x', 0], ['y', 0]] (The `getCoords` is not own property)
 */
function pairs(target) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  args = args.length ? args : (0, _keys2.default)(target);
  return args.map(function (arg) {
    return [arg, (0, _get2.default)(target, arg)];
  });
}

exports.default = pairs;