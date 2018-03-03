import isObject from '../is-object';
import flatten from '../../array/flatten';

/**
 * @param {Object} value
 * @param {*} args
 * @returns {Object}
 */
export default function (value, ...args) {
    if (!isObject(value)) {
        throw new Error('An object is expected');
    }

    const keys = Object.keys(value);
    const props = flatten(args);
    const result = {};

    keys.forEach(key => {
        if (props.indexOf(key) === -1) {
            result[key] = value[key];
        }
    });

    return result;
}
