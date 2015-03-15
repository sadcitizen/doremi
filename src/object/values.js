import keys from './keys';
import deepGet from './deepGet';

/**
 * Creates an array of own enumerable property values of `target`.
 * Available for nested properties.
 *
 * @param {Object} target The object to inspect.
 * @param {Array} args The array of keys.
 * @returns {Array} Returns array of property values.
 *
 * @example
 *
 * var obj = { a: 'b', c: 'd' };
 * ob.values(obj);
 * // => ['b', 'd']
 *
 * ob.values(obj, 'a');
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
 * ob.values(new Point(0, 0));
 * // => [0, 0] (The `getCoords` is not own property)
 */
function values(target, ...args) {
    args = args.length ? args : keys(target);
    return args.map(arg => deepGet(target, arg));
}

export default values;