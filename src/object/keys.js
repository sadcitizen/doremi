var hasOwn = require('./hasOwn');

/**
 * @returns {array} Returns array of keys.
 */
module.exports = Object.keys || function keys(target) {
    var result = [];

    for (var key in target) {
        if (hasOwn(target, key)) {
            result.push(key);
        }
    }

    return result;
};