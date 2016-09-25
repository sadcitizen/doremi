'use strict';

import toString from './stringify';
import getValue from '../object/get-value';
import trim from './trim';
import isUndefined from '../is/is-undefined';
import { es6 } from '../internal/regexes/template';

/**
 * Replaces tokens from `target` on corresponding values from `data`.
 *
 * @param {string} target The template stringify with tokens.
 * @param {Object|Array} data The data to replace.
 * @param {RegExp} syntax The regular expression to search for tokens.
 * @returns {string} Returns the stringify with replaced values.
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
        value = getValue(data, trim(name));
        return !isUndefined(value) ? toString(value) : match;
    });
}