'use strict';

import toString from '../to/toString';
import get from '../object/get';
import trim from './trim';
import isUndefined from '../is/isUndefined';
import { es6 } from '../internal/regexes/template';

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
export default function (target, data, syntax = es6) {
    target = toString(target);

    if (target.length === 0) {
        return '';
    }

    let value;

    return target.replace(syntax, (match, name) => {
        value = get(data, trim(name));
        return !isUndefined(value) ? toString(value) : match;
    });
}