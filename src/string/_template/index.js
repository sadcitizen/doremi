import getValue from '../../object/get-value';
import trim from '../_trim';
import { es6 } from '../../internal/regexes/template';
import { UNDEF } from '../../internal/constants';

/**
 * Replaces tokens from `target` on corresponding values from `data`.
 *
 * @param {string} target The _template string with tokens.
 * @param {Object|Array} data The data to replace.
 * @param {RegExp} syntax The regular expression to search for tokens.
 * @returns {string} Returns the string with replaced values.
 *
 * @example
 *
 * var lorem = { a: 'lorem', b: 'ipsum', c: 'dolor' };
 * _template('${a} ipsum ${c} sit', lorem);
 * // => 'lorem ipsum dolor sit'
 *
 * _template('<%= a %> <%= b %> <%= c %>', lorem, /<\%\=([^<%=>]+?)\%>/g);
 * // => 'lorem ipsum dolor'
 */
export default function (target, data, syntax = es6) {
    target = String(target);

    if (target.length === 0) {
        return '';
    }

    let value;

    return target.replace(syntax, (match, name) => {
        value = getValue(data, trim(name));

        return value !== UNDEF ? String(value) : match;
    });
}
