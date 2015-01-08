var string = require('../to/string');

/**
 * Splits the `target` into array of lines.
 *
 * @param {String} target The string to split.
 * @returns {Array} The array of lines.
 *
 * @example
 *
 * st.lines('Lorem ipsum');
 * // => ['Lorem ipsum']
 *
 * st.lines('Lorem \nipsum');
 * // => ['Lorem ', 'ipsum']
 */
module.exports = function lines(target) {
    return string(target).split(/\r?\n/g);
};