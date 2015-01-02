var string = require('../to/string');
var clean = require('./clean');

/**
 * Returns the array of words form `target`.
 *
 * @param {String} target The string to separate.
 * @param {String} sep The separator.
 * @returns {Array} The array of words.
 *
 * @example
 *
 * string.words('lorem ipsum dolor sit');
 * // => ['lorem', 'ipsum', 'dolor', 'sit']
 *
 * string.words('lorem/ipsum/dolor/sit', '/');
 * // => ['lorem', 'ipsum', 'dolor', 'sit']
 */
module.exports = function words(target, sep) {
    target = clean(target);
    sep = string(sep);

    if (target.length === 0) {
        return [];
    }

    return target.split(sep.length ? sep: ' ');
};