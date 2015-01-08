var string = require('../to/string');
var get = require('../object/get');
var trim = require('./trim');
var defined = require('../is/defined');
var regex = require('../internal/template.regex');

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
module.exports = function template(target, data, syntax) {
    target = string(target);
    syntax = syntax || regex.es6;

    if (target.length === 0) {
        return '';
    }

    return target.replace(syntax, function (match, name) {
        var value = get(data, trim(name));
        return defined(value) ? string(value) : match;
    });
};