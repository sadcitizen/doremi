import symbols from '../internal/escape.symbols';
import toString from '../to/toString';

/**
 * Escapes a string for insertion into HTML, replacing &, <, >, ", `, and ' characters.
 *
 * @param {String} target The string to replace.
 * @returns {String} Returns the escaped string.
 *
 * @example
 *
 * escape('<p>lorem & ipsum</p>');
 * // => '&lt;p&gt;lorem &amp; ipsum&lt;/p&gt;'
 */
function escape(target) {
    target = toString(target);

    if (target.length === 0) {
        return '';
    }

    return target
        .replace(/(&)(?![a-z0-9#]+;)/g, '&amp;')
        .replace(/[<>"'`]/g, match => symbols[match]);
}

export default escape;