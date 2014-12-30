var slice = Array.prototype.slice;

/**
 * @param target
 * @returns {Array}
 */
module.exports = function rest(target) {
    return slice.call(target, 1);
};