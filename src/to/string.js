var exists = require('../is/exists');

/**
 *
 * @param {*} target
 * @returns {String}
 */
module.exports = function string(target) {
    return !exists(target) ? '' : target.toString();
};