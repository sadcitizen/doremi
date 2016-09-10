import isUndefined from '../is/is-undefined';
import isObject from '../is/is-object';
import isString from '../is/is-string';

/**
 * Creates an empty nested object by `path` and returns it.
 * Reuses an existent nested properties if it is an object, else override it to object.
 *
 * @param target The object to inspect.
 * @param path Path for properties.
 * @returns {object} Returns the nested object.
 *
 * @example
 *
 * var lorem = {};
 * ns(lorem, 'ipsum.dolor.sit');
 * // => lorem = { ipsum: { dolor: sit: {} } }
 *
 * var lorem = { ipsum: 'dolor' };
 * ns(lorem, 'ipsum.dolor.sit');
 * // => lorem = { ipsum: { dolor: sit: {} } } (ipsum is overridden)
 */
function ns(target, path) {
    if (!isObject(target)) {
        throw new TypeError('Target must be an object!');
    }

    if (!isString(path)) {
        throw new TypeError('Path must be a string!');
    }

    var obj = target;

    path.split('.').forEach(key => {
        if (!(!isUndefined(obj[key]) && isObject(obj[key]))) {
            obj[key] = {};
        }

        obj = obj[key];
    });

    return obj;
}

export default ns;