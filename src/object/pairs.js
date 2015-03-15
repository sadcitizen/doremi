import rest from '../array/rest';
import keys from './keys';
import deepGet from './deepGet';

/**
 * Creates a two dimensional array of the key-value pairs for `target`,
 * e.g. `[[key1, value1], [key2, value2]]`.
 * Available for nested properties.
 *
 * @param target The object to inspect.
 * @returns {array} Returns array of key-value pairs.
 *
 * @example
 *
 * var obj = { a: 'b', c: 'd' };
 * ob.pairs(obj);
 * // => ['b', 'd']
 *
 * ob.pairs(obj, 'a');
 * // => ['b']
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
 * ob.pairs(new Point(0, 0));
 * // => [['x', 0], ['y', 0]] (The `getCoords` is not own property)
 */
function pairs(target) {
    var args = rest(arguments);
    args = args.length ? args : keys(target);
    return args.map(arg => [arg, deepGet(target, arg)]);
}

export default pairs;