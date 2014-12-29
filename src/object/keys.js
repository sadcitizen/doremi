var hasOwn = require('./hasOwn');

/**
 * Creates an array of all own enumerable property names of `target`.
 *
 * @param target The object to inspect.
 * @returns {array} Returns array of property names.
 *
 * @example
 *
 * var obj = { a: 'b', c: 'd' };
 * object.keys(obj);
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
 * object.keys(new Point(0, 0));
 * // => ['x', 'y'] (The `getCoords` is not own property)
 */
module.exports = Object.keys || function keys(target) {
    var result = [];

    for (var key in target) {
        if (hasOwn(target, key)) {
            result.push(key);
        }
    }

    return result;
};