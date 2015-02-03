import ok from '../is/ok';
import object from '../is/object';
import array from '../is/array';
import string from '../is/string';
import exists from '../is/exists';
import defined from '../is/defined';

/**
 * Resolves the value of property `key` on `target`.
 * Returns default value `def` if the property value is `undefined`.
 *
 * @param target The object to query.
 * @param key The name of property to resolve.
 * @param def Default value.
 * @returns {*} Returns the value of property `key` or default value `def`.
 *
 * @example
 *
 * var lorem = {
 *     lorem: {
 *         ipsum: {
 *             dolor: {
 *                 sit: 'amet'
 *             }
 *         },
 *         foo: function () {
 *             return 'bar';
 *         }
 *     },
 *     bar: 42
 * };
 *
 * ob.get(lorem, 'bar');
 * // => 42
 *
 * ob.get(lorem, 'lorem.ipsum.dolor.sit');
 * // => 'amet'
 *
 * ob.get(lorem, 'lorem.ipsum.foo');
 * // => undefined
 *
 * ob.get(lorem, 'lorem.ipsum.foo', 42);
 * // => 42
 */
function get(target, key, def) {
    ok(object(target) || array(target), 'Target must be an object or an array!');
    ok(string(key), 'Property must be a string!');

    var obj = target,
        parts = key.split('.'),
        last = parts.pop();

    /* jshint -W084 */
    while (key = parts.shift()) {
        obj = obj[key];
        if (!exists(obj)) {
            return def;
        }
    }
    /* jshint +W084 */

    return defined(obj[last]) ? obj[last] : def;
}

export default get;