var rest = require('../list/rest');
var keys = require('./keys');
var get = require('./get');

/**
 * Creates an array of own enumerable property values of `target`.
 * Available for nested properties.
 *
 * @param target The object to inspect.
 * @returns {array} Returns array of property values.
 *
 * @example
 *
 * var obj = { a: 'b', c: 'd' };
 * object.values(obj);
 * // => ['b', 'd']
 *
 * object.values(obj, 'a');
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
 * object.values(new Point(0, 0));
 * // => [0, 0] (The `getCoords` is not own property)
 */
module.exports = function values(target) {
    var args = rest(arguments);

    args = args.length ? args : keys(target);

    return args.map(function (arg) {
        return get(target, arg);
    });
};