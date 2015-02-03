import defined from '../is/defined';
import object from '../is/object';
import string from '../is/string';

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
 * ob.ns(lorem, 'ipsum.dolor.sit');
 * // => lorem = { ipsum: { dolor: sit: {} } }
 *
 * var lorem = { ipsum: 'dolor' };
 * ob.ns(lorem, 'ipsum.dolor.sit');
 * // => lorem = { ipsum: { dolor: sit: {} } } (ipsum is overridden)
 */
function ns(target, path) {
    if (!object(target)) {
        throw new TypeError('Target must be an object!');
    }

    if (!string(path)) {
        throw new TypeError('Path must be a string!');
    }

    var obj = target;

    path.split('.').forEach(function (key) {
        if (!(defined(obj[key]) && object(obj[key]))) {
            obj[key] = {};
        }

        obj = obj[key];
    });

    return obj;
}

export default ns;