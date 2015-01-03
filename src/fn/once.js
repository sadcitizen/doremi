var before = require('./before');

module.exports = function once(target) {
    return before(target, 2);
};