var whitespaces = require('../internal/whitespaces');
var string = require('../to/string');
var rest = require('../list/rest');

/**
 * Removes leading whitespaces or given characters from `target`.
 *
 * @param {String} target The string to trim.
 * @returns {String} The trimmed string.
 *
 * @example
 *
 * string.trim('   lorem');
 * // => 'lorem'
 *
 * string.trim('*+/lorem', '/', '+*');
 * // => 'lorem'
 */
module.exports = function ltrim(target) {
    var chars = rest(arguments).join('');
    target = string(target);

    if (target.length === 0) {
        return '';
    }

    chars = chars.length ? chars : whitespaces;
    return target.replace(new RegExp('^[' + chars + ']+', 'ig'), '');
};