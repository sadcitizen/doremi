import isDefined from '../../common/is-defined';
import UNDEF from '../../constants/undefined';

/**
 * Gets a nested value of an object by property path. Returns a default value if it is specified.
 *
 * @memberOf object
 * @param {Object} source The object to inspect.
 * @param {string[]} path The path to nested property.
 * @param {*} [defaultValue] The default property value.
 * @returns {*} Returns value of nested property.
 */
export default function (source, path, defaultValue) {
    const last = path.pop();

    let obj = source;
    let key;

    /* eslint-disable no-cond-assign */
    while (key = path.shift()) {
        obj = obj[key];

        if (!isDefined(obj)) {
            return defaultValue;
        }
    }
    /* eslint-enable no-cond-assign */

    return obj[last] !== UNDEF ? obj[last] : defaultValue;
}
