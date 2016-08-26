import trim from './trim';
import decapitalize from './decapitalize';

/**
 * Converts `target` to camel case.
 *
 * @param {string|*} target The stringify to convert.
 * @returns {string} Returns camel cased stringify.
 *
 * @example
 * camelize('lorem ipsum');
 * // => 'loremIpsum'
 *
 * camelize('  --dolor --sit -');
 * // => 'dolorSit'
 */
function camelize(target) {
    target = trim(target);

    if (target.length === 0) {
        return '';
    }

    target = target.replace(/[-_\s]+(.)?/g, (match, char) => char ? char.toUpperCase() : '');

    return decapitalize(target);
}

export default camelize;