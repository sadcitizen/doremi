import trim from '../_trim';
import decapitalize from '../_decapitalize';

/**
 * Converts `target` to camel case.
 *
 * @param {string|*} target The string to convert.
 * @returns {string} Returns camel cased string.
 *
 * @example
 * camelize('lorem ipsum');
 * // => 'loremIpsum'
 *
 * camelize('  --dolor --sit -');
 * // => 'dolorSit'
 */
export default function (target) {
    target = trim(target);

    if (target.length === 0) {
        return '';
    }

    return decapitalize(target.replace(/[-_\s]+(.)?/g, (match, char) => char ? char.toUpperCase() : ''));
}
