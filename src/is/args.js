var type = require('./type');

module.exports = function args(target) {
    return type(target) === 'arguments';
};