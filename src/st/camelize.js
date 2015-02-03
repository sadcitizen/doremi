import trim from './trim';
import decapitalize from './decapitalize';

/**
 * Converts `target` to camel case.
 *
 * @param {String} target The string to convert.
 * @returns {String} Returns camel cased string.
 *
 * @example
 *
 * st.camelize('lorem ipsum');
 * // => 'loremIpsum'
 *
 * st.camelize('  --dolor --sit -');
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