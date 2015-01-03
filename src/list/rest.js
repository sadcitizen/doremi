var slice = require('../internal/slice');

/**
 *
 * @param target
 * @param at
 * @returns {Array}
 */
module.exports = function rest(target, at) {
    return slice(target, (at |= 0) < 1 ? 1 : at);
};