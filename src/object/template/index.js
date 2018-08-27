import { es6 } from '../../internal/regexes/template';
import isObject from '../../common/is-object';
import isString from '../../common/is-string';
import getValue from '../get-value';
import trim from '../../string/_trim';

/**
 * Replaces tokens from `target` on corresponding values from `source`.
 *
 * @param {*} target The target object or array with tokens.
 * @param {Object|Array} source The values to replace.
 * @param {RegExp} syntax The regular expression to search for tokens.
 * @returns {Object} Target object or array with replaced tokens
 *
 * @example
 *
 * var target = {a: '${a}', b: '${c}', c: '${b}'},
 *     source = {a: 1, b: 5, c: 3};
 *
 * _template(target, source);
 * // => {a: 1, b: 3, c: 5}
 */
function template(target, source, syntax = es6) {
    if (isString(target)) {
        if (target.length === 0) {
            return '';
        }

        return getValue(source, trim(target.replace(syntax, '$1')), target);
    }

    const isArr = Array.isArray(target);
    const isObj = isObject(target);
    const fn = (value, key) => target[key] = template(value, source, syntax);

    /* jshint -W030 */
    isArr && target.forEach(fn);
    isObj && Object.keys(target).forEach(fn);
    /* jshint +W030 */

    return target;
}

export default template;
