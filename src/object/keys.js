import hasOwn from './hasOwn';

/**
 * Creates an array of all own enumerable property names of `target`.
 *
 * @param target The object to inspect.
 * @returns {Array} Returns array of property names.
 *
 * @example
 *
 * var obj = { a: 'b', c: 'd' };
 * ob.keys(obj);
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
 * ob.keys(new Point(0, 0));
 * // => ['x', 'y'] (The `getCoords` is not own property)
 */
function keys(target) {
    var result = [];

    for (var key in target) {
        if (hasOwn(target, key)) {
            result.push(key);
        }
    }

    return result;
}

export default keys;