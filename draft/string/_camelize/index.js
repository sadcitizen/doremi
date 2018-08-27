import trim from '../_trim';
import decapitalize from '../_decapitalize';

/**
 * Converts the given string to camel case.
 *
 * @param {string|*} string The string to convert.
 * @returns {string} Returns camel cased string.
 *
 * @example
 * camelize('lorem ipsum');
 * // => 'loremIpsum'
 *
 * camelize('  --dolor --sit -');
 * // => 'dolorSit'
 */
export default function (string) {
    const trimmedString = trim(string);

    if (trimmedString.length === 0) {
        return '';
    }

    return decapitalize(trimmedString.replace(/[-_\s]+(.)?/g, (match, char) => char ? char.toUpperCase() : ''));
}
