import isObject from '../is-object';
import flatten from '../../array/flatten';
//https://github.com/jonschlinkert/object.pick
/**
 * @param {Object} value
 * @param {*} args
 * @returns {Object}
 */
export default function (value, ...args) {
    if (!isObject(value)) {
        throw new Error('An object is expected');
    }

    const keys = flatten(args);
    const result = {};

    keys.forEach(key => {
        if (value.hasOwnProperty(key)) {
            result[key] = value[key];
        }
    });

    return result;
}
