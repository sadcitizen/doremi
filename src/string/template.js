import toString from '../to/toString';
import deepGet from '../object/deepGet';
import trim from './trim';
import isUndefined from '../is/isUndefined';
import regex from '../internal/regexes/template';

/**
 * Replaces tokens from `target` on corresponding values from `data`.
 *
 * @param {String} target The template string with tokens.
 * @param {Object|Array} data The data to replace.
 * @param {RegExp} syntax The regular expression to search for tokens.
 * @returns {String} Returns the string with replaced values.
 *
 * @example
 *
 * var lorem = { a: 'lorem', b: 'ipsum', c: 'dolor' };
 * template('${a} ipsum ${c} sit', lorem);
 * // => 'lorem ipsum dolor sit'
 *
 * template('<%= a %> <%= b %> <%= c %>', lorem, /<\%\=([^<%=>]+?)\%>/g);
 * // => 'lorem ipsum dolor'
 */
function template(target, data, syntax) {
    target = toString(target);
    syntax = syntax || regex.es6;

    if (target.length === 0) {
        return '';
    }

    return target.replace(syntax, function (match, name) {
        var value = deepGet(data, trim(name));
        return !isUndefined(value) ? toString(value) : match;
    });
}

export default template;