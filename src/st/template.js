import string from '../to/string';
import deepGet from '../ob/deepGet';
import trim from './trim';
import defined from '../is/defined';
import regex from '../internal/template.regex';

/**
 * Replaces tokens form `target` on corresponding values from `data`.
 *
 * @param {String} target The template string with tokens.
 * @param {Object|Array} data The data to replace.
 * @param {RegExp} syntax The regular expression to search for tokens.
 * @returns {String} Returns the string with replaced values.
 *
 * @example
 *
 * var lorem = { a: 'lorem', b: 'ipsum', c: 'dolor' };
 * st.template('${a} ipsum ${c} sit', lorem);
 * // => 'lorem ipsum dolor sit'
 *
 * st.template('<%= a %> <%= b %> <%= c %>', lorem, /<\%\=([^<%=>]+?)\%>/g);
 * // => 'lorem ipsum dolor'
 */
function template(target, data, syntax) {
    target = string(target);
    syntax = syntax || regex.es6;

    if (target.length === 0) {
        return '';
    }

    return target.replace(syntax, function (match, name) {
        var value = deepGet(data, trim(name));
        return defined(value) ? string(value) : match;
    });
}

export default template;