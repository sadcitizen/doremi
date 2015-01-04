var string = require('../to/string');
var repeat = require('./repeat');
/**
 *
 * @param {String} target
 * @param {Number} length
 * @param char
 * @returns {*}
 */
module.exports = function lpad(target, length, char) {
    target = string(target);
    return target.length < (length |= 0) ? repeat((char || '')[0], length - target.length) + target : target;
};