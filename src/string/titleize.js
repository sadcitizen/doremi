var clean = require('./clean');

/**
 * Creates a title string. Capitalize all words in the string.
 *
 * @param {String} target The string to titleize.
 * @returns {String} The title string.
 *
 * @example
 *
 * string.titleize('lorem ipsum dolor');
 * // => 'Lorem Ipsum Dolor'
 *
 * string.titleize('lorem-ipsum-dolor');
 * // => 'Lorem-Ipsum-Dolor'
 *
 * string.titleize('lorem_ipsum_dolor');
 * // => 'Lorem_Ipsum_Dolor'
 */
module.exports = function titleize(target) {
    target = clean(target);

    if (target.length === 0) {
        return '';
    }

    return target.toLowerCase().replace(/(?:^|\s|-|_)+\S/g, function(char) {
        return char.toUpperCase();
    });
};