import keys from './keys';
import get from './get';

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
 * values(obj);
 * // => ['b', 'd']
 *
 * values(obj, 'a');
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
 * values(new Point(0, 0));
 * // => [0, 0] (The `getCoords` is not own property)
 */
function values(target, ...args) {
    args = args.length ? args : keys(target);
    return args.map(arg => get(target, arg));
}

export default values;