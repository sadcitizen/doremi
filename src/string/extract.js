'use strict';

import stringify from './stringify';
import set from '../object/set';

const es6 = ['${', '}'];
const escape = target => target.replace(/[\\\^\$\*\+\.\?\(\)]/g, '\\$&');

/**
 * Extracts an object from a stringify based on a pattern.
 *
 * @param {string} target The stringify to extract from.
 * @param {string} pattern The pattern.
 * @param {Array} seps The array of separators.
 * @returns {Object|null} Returns the extracted object or null.
 *
 * @example
 *
 * extract('bill@gates.com', '${user}@${host}.${domain}');
 * => { user: 'bill', host: 'gates', domain: 'com' }
 */
export default function (target, pattern, seps = es6) {
    target = stringify(target);
    pattern = stringify(pattern);

    if (target.length === 0 || pattern.length === 0 || target === pattern) {
        return null;
    }

    const escaped = seps.map(x => escape(x));
    const syntax = new RegExp(`${escaped[0]}[^${seps.join('')}]+?${escaped[1]}`, 'g');
    const regex = new RegExp(pattern.split(syntax).map(x => escape(x)).join('(.+)'));

    let tokens = pattern.match(syntax);

    if (!tokens) {
        return null;
    }

    let matches = target.match(regex);

    if (!matches) {
        return null;
    }

    matches = matches.splice(1);
    tokens = tokens.map(x => x.replace(new RegExp(escaped.join('|'), 'g'), ''));

    let result = {};

    tokens.forEach((token, i) => set(result, token, matches[i]));

    return result;
}