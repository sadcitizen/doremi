var trim = require('./trim');
var decapitalize = require('./decapitalize');

/**
 * Converts `target` to camel case.
 *
 * @param {String} target The string to convert.
 * @returns {String} Returns camel cased string.
 *
 * @example
 *
 * string.camelize('lorem ipsum');
 * // => 'loremIpsum'
 *
 * string.camelize('  --dolor --sit -');
 * // => 'dolorSit'
 */
module.exports = function camelize(target) {
    target = trim(target);

    if (target.length === 0) {
        return '';
    }

    target = target.replace(/[-_\s]+(.)?/g, function (match, char) {
        return char ? char.toUpperCase() : '';
    });

    return decapitalize(target);
};