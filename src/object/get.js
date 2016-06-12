import ok from '../internal/ok';
import isObject from '../is/isObject';
import isArray from '../is/isArray';
import isString from '../is/isString';
import isExists from '../is/isExists';
import isUndefined from '../is/isUndefined';

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
 * get(lorem, 'bar');
 * // => 42
 *
 * get(lorem, 'lorem.ipsum.dolor.sit');
 * // => 'amet'
 *
 * get(lorem, 'lorem.ipsum.foo');
 * // => undefined
 *
 * get(lorem, 'lorem.ipsum.foo', 42);
 * // => 42
 */
export default function (target, key, def) {
    ok(isObject(target) || isArray(target), 'Target must be an object or an array!');
    ok(isString(key), 'Property must be a string!');

    let obj = target;
    const parts = key.split('.');
    const last = parts.pop();

    /* eslint-disable no-cond-assign */
    while (key = parts.shift()) {
        obj = obj[key];
        if (!isExists(obj)) {
            return def;
        }
    }
    /* eslint-enable no-cond-assign */

    return !isUndefined(obj[last]) ? obj[last] : def;
}