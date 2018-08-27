import isObject from '../../common/is-object';
import { UNDEF } from '../../internal/constants';

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
 * let lorem = {};
 * namespace(lorem, 'ipsum.dolor.sit');
 * // => lorem = { ipsum: { dolor: sit: {} } }
 *
 * let lorem = { ipsum: 'dolor' };
 * namespaces(lorem, 'ipsum.dolor.sit');
 * // => lorem = { ipsum: { dolor: sit: {} } } (ipsum is overridden)
 */
export default function (target, path) {
    if (!path) {
        return target;
    }

    let obj = target;

    path.split('.').forEach(key => {
        if (!(obj[key] !== UNDEF && isObject(obj[key]))) {
            obj[key] = {};
        }

        obj = obj[key];
    });

    return obj;
}
