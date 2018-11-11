import { INVALID_OBJECT_ARGUMENT } from '../../constants/errors';
import isObject from '../../common/is-object';

/**
 * Creates a copy of the given object without the given properties.
 *
 * @memberOf object
 * @param {Object} source The object to inspect.
 * @param {Array} properties The array of properties to omit.
 * @returns {Object} Returns new object without the given properties.
 */
export default function (source, properties) {
    if (!isObject(source)) {
        throw new TypeError(INVALID_OBJECT_ARGUMENT);
    }

    const keys = Object.keys(source);
    const result = {};

    keys.forEach(key => {
        if (properties.indexOf(key) === -1) {
            result[key] = source[key];
        }
    });

    return result;
}
