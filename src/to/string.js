var exists = require('../is/exists');

/**
 *
 * @param {*} target
 * @returns {string}
 */
module.exports = function string(target) {
    return !exists(target) ? '' : target.toString();
};