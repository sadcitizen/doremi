var get = require('./get');

/**
 * Creates a function which returns the property value of `key` on `target`
 * or default value `def` if the property value is undefined.
 *
 * @param key The property name.
 * @param def Default value.
 * @returns {Function} Returns the new function.
 *
 * @example
 *
 * var obj = { lorem: 'ipsum' };
 *
 * var lorem = ob.prop('lorem');
 * lorem(obj);
 * // => 'ipsum'
 *
 * var sit = ob.prop('sit', 'amet');
 * sit(obj);
 * // => 'amet'
 *
 * var users = [{ name: 'John', age: 23 }, { name: 'Jane', age: 21 }];
 * var names = ob.prop('name');
 * users.map(names);
 * // => ['John', 'Jane']
 */
module.exports = function prop(key, def) {
    return function (target) {
        return get(target, key, def);
    };
};