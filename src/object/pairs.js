import keys from './keys';
import get from './get';

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
function pairs(target, ...args) {
    args = args.length ? args : keys(target);
    return args.map(arg => [arg, get(target, arg)]);
}

export default pairs;