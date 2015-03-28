import symbols from '../internal/escape.symbols';
import string from '../to/string';
import invert from '../object/invert';

/**
 * Converts HTML-entities `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#x27;`, `&#x60;`
 * to their corresponding characters.
 *
 * @param {String} target The string to replace.
 * @returns {String} Returns the escaped string.
 *
 * @example
 *
 * escape('<p>lorem & ipsum</p>');
 * // => '&lt;p&gt;lorem &amp; ipsum&lt;/p&gt;'
 */
function unescape(target) {
    target = string(target);

    if (target.length === 0) {
        return '';
    }

    var invertedSymbols = invert(symbols);
    /* jshint -W109 */
    invertedSymbols['&#39;'] = "'";
    /* jshint +W109 */
    invertedSymbols['&#96;'] = '`';

    return target.replace(/&([^&;]+);/g, match => invertedSymbols[match]);
}

export default unescape;