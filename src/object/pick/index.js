/* eslint-disable no-prototype-builtins */
import { INVALID_OBJECT_ARGUMENT } from '../../constants/errors';
import isObject from '../../common/is-object';

/**
 * Creates a copy of the given object with only the given properties.
 *
 * @memberOf object
 * @param {Object} source The object to inspect.
 * @param {Array} properties The array of properties to pick.
 * @returns {Object} Returns the new object with only the given properties.
 */
export default function (source, properties) {
    if (!isObject(source)) {
        throw new TypeError(INVALID_OBJECT_ARGUMENT);
    }

    const result = {};

    properties.forEach(prop => {
        if (source.hasOwnProperty(prop)) {
            result[prop] = source[prop];
        }
    });

    return result;
}
/* eslint-enable no-prototype-builtins */
