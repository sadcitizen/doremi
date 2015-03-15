import regex from '../internal/template.regex';
import array from '../is/array';
import object from '../is/object';
import string from '../is/string';
import arrayEach from '../array/each';
import objectEach from '../object/each';
import deepGet from './deepGet';
import trim from '../string/trim';

/**
 * @param {*} target
 * @param {Object|Array} source
 * @param {RegExp} syntax
 * @returns {Object}
 */
function template(target, source, syntax = regex.es6) {
    if (string(target)) {
        if (target.length === 0) {
            return '';
        }

        return deepGet(source, trim(target.replace(syntax, '$1')), target);
    }

    let isArr = array(target),
        isObj = object(target),
        fn;

    fn = (value, key) => { target[key] = template(value, source, syntax); };

    /* jshint -W030 */
    isArr && arrayEach(target, fn);
    isObj && objectEach(target, fn);
    /* jshint +W030 */

    return target;
}

export default template;