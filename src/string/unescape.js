var symbols = require('../internal/escape.symbols');
var string = require('../to/string');
var invert = require('../object/invert');

/**
 * Converts HTML-entities `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#x27;`, `&#x60;`
 * to their corresponding characters.
 *
 * @param {String} target The string to replace.
 * @returns {String} Returns the escaped string.
 *
 * @example
 *
 * string.escape('<p>lorem & ipsum</p>');
 * // => '&lt;p&gt;lorem &amp; ipsum&lt;/p&gt;'
 */
module.exports = function unescape(target) {
    target = string(target);

    if (target.length === 0) {
        return '';
    }

    var invertedSymbols = invert(symbols);
    /* jshint -W109 */
    invertedSymbols['&#39;'] = "'";
    /* jshint +W109 */
    invertedSymbols['&#96;'] = '`';

    return target.replace(/\&([^&;]+);/g, function (match) {
        return invertedSymbols[match];
    });
};