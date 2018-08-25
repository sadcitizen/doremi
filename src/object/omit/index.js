import isObject from '../../common/is-object';
import flatten from '../../array/flatten';
//https://github.com/jonschlinkert/object.omit
//https://github.com/jonschlinkert/omit-deep
//https://github.com/jonschlinkert/omit-value
/**
 * @param {Object} value
 * @param {*} args
 * @returns {Object}
 * TODO: Ключи должны быть вложенными, например 'a.b.c'
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
