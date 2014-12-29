var isFn = require('../is/fn');
var get = require('./get');

/**
 * Resolves the value of property `key` on `target`.
 * If the value of `key` is a function it is invoked and its result
 * is returned, else the property value is returned.
 * Returns default value `def` if the property value is `undefined`.
 *
 * @param target The object to query.
 * @param key The name of property to resolve.
 * @param def Default value.
 * @returns {*} Returns the value of property `key` or default value `def`.
 *
 * @example
 *
 * var obj = { attr: 'value', arr: [0, 1, 2], num: 2, falsey: '', method: function () { return this.attr; } };
 *
 * object.result(obj, 'attr');
 * // => 'value'
 *
 * object.result(obj, 'some', 42);
 * // => 42
 *
 * object.result(obj, 'method');
 * // => 'value'
 */
module.exports = function result(target, key, def) {
    var prop = get(target, key, def);
    return isFn(prop) ? prop.call(target) : prop;
};