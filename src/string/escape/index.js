import symbols from '../../internal/escape-symbols';

/**
 * Escapes a stringify for insertion into HTML, replacing &, <, >, ", `, and ' characters.
 *
 * @param {string} target The stringify to replace.
 * @returns {string} Returns the escaped stringify.
 *
 * @example
 * escape('<p>lorem & ipsum</p>');
 * // => '&lt;p&gt;lorem &amp; ipsum&lt;/p&gt;'
 */
export default function (target) {
    target = String(target);

    if (target.length === 0) {
        return '';
    }

    return target
        .replace(/(&)(?![a-z0-9#]+;)/g, '&amp;')
        .replace(/[<>"'`]/g, match => symbols[match]);
}
