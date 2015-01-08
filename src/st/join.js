var rest = require('../list/rest');
var string = require('../to/string');

/**
 * Joins strings together with a given separator.
 *
 * @param {String} sep The separator of strings.
 * @returns {String} Returns the joined string.
 *
 * @example
 *
 * st.join('', 'Lorem', 'Ipsum');
 * // => 'LoremIpsum'
 *
 * st.join(' ', 'Lorem', null, '');
 * // => 'Lorem'
 */
module.exports = function join(sep) {
    var result = [];
    sep = string(sep);

    rest(arguments).forEach(function (item) {
        item = string(item);
        if (item.length) {
            result.push(item);
        }
    });
    return result.join(string(sep));
};